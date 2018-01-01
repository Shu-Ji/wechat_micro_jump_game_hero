# coding: u8

import commands
import time
import math
import colorsys

from PIL import Image, ImageDraw


class Otsu(object):

    def __init__(self, path, debug=False):
        self.im = Image.open(path)
        self.w, self.h = self.im.size
        self.draw = ImageDraw.Draw(self.im)

        gray = self.im.convert('L')

        t0 = time.time()
        self.hero_pos = self.find_hero()
        t1 = time.time()
        print '小人臀部坐标：', self.hero_pos, '耗时：', t1 - t0

        self.thresh = self.erase_bg(gray)
        t2 = time.time()
        print '擦除背景耗时：', t2 - t1

        self.top_most = self.find_top_most(self.thresh)
        t3 = time.time()
        print '顶点坐标：', self.top_most, '耗时：', t3 - t2

        self.lr_most = self.find_left_or_right_most(self.thresh)
        t4 = time.time()
        print '极左/右坐标：', self.lr_most, '耗时：', t4 - t3

        self.center_pos = self.top_most[0], self.lr_most[1]
        print '中点坐标：', self.center_pos

        if debug:
            self.draw_pos(self.hero_pos)
            self.draw_pos(self.top_most)
            self.draw_pos(self.lr_most)
            self.draw_pos(self.center_pos)

            cx, cy = self.center_pos
            hx, hy = self.hero_pos
            self.draw.line((cx, cy, hx, hy), fill=(0, 255, 0), width=8)

            self.im.show()
            self.thresh.show()

    def find_hero(self):
        hero_poses = []
        pixels = self.im.load()
        for y in xrange(self.h / 3, self.h * 2 / 3):
            for x in xrange(self.w):
                # 是否与臀部的紫色相同
                if pixels[x, y] == (56, 56, 97, 255):
                    hero_poses.append((x, y))
        # 取平均坐标，作为小人坐标
        return map(lambda i: sum(i) / len(i), zip(*hero_poses))

    def rgb_to_hsv(self, r, g, b, a=255):
        h, s, v = colorsys.rgb_to_hsv(r / 255., g / 255., b / 255.)
        return int(h * 255.), int(s * 255.), int(v * 255.)

    def erase_bg(self, gray):
        """去除背景"""

        pixels = self.im.load()

        # 启动时，获取右下脚某个点的颜色，视为背景色，将背景设置为黑色
        # 其余设置为白色
        bg_color = pixels[10, 800]
        bg_h, bg_s, bg_v = self.rgb_to_hsv(*bg_color)
        print '背景 hsv：', self.rgb_to_hsv(*bg_color)

        def is_same(h, s, v):
            dh = min(abs(h - bg_h), 360 - abs(h - bg_h)) / 180.
            ds = abs(s - bg_s)
            dv = abs(v - bg_v) / 255.
            distance = math.sqrt(dh * dh + ds * ds + dv * dv)
            return distance < 0.2

        # 如果小人在左边，那么为了加速查找，从小人中心往右找
        if self.hero_pos[0] < self. w / 2:
            min_x = self.hero_pos[0]
            max_x = self.w
        else:
            min_x = 0
            max_x = self.hero_pos[0]

        for y in xrange(self.h / 3, self.h * 3 / 4):
            for x in xrange(min_x, max_x):
                h, s, v = self.rgb_to_hsv(*pixels[x, y])
                if (abs(h - bg_h) < 10) and (abs(s - bg_s) < 20):
                #if is_same(h, s, v):
                    gray.putpixel((x, y), 0)
                else:
                    gray.putpixel((x, y), 255)
        return gray

    def find_top_most(self, thresh):
        pixels = thresh.load()

        hero_r = 25

        # 如果小人在右边，那么顶点一定在左边
        if self.hero_pos[0] > self.w / 2:
            for y in xrange(self.h / 4, self.h / 2):
                for x in xrange(self.w / 2):
                    if pixels[x, y] == 255:
                        return (x, y)
        else:
            for y in xrange(self.h / 4, self.h / 2):
                for x in xrange(self.w - 1, self.w / 2, -1):
                    if pixels[x, y] == 255:
                        return (x, y)

    def find_left_most(self, thresh):
        pixels = thresh.load()
        for x in xrange(self.w):
            for y in xrange(self.h / 4, self.h / 2):
                if pixels[x, y] == 255:
                    return (x, y)

    def find_right_most(self, thresh):
        pixels = thresh.load()
        for x in xrange(self.w - 1, -1, -1):
            for y in xrange(self.h / 4, self.h / 2):
                if pixels[x, y] == 255:
                    return (x, y)

    def find_left_or_right_most(self, thresh):
        # 如果小人在右侧，那么找 left most
        if self.hero_pos[0] > self.w / 2:
            return self.find_left_most(thresh)
        # 否则找 right most
        else:
            return self.find_right_most(thresh)

    def draw_pos(self, pos, color=(0, 255, 0)):
        x, y = pos
        r = 25
        self.draw.ellipse((x, y, x + r, y + r), fill=color, outline=color)

    def line_to_time(self):
        """距离换算时长"""
        line_length = int(math.sqrt(
            pow(otsu.center_pos[0] - otsu.hero_pos[0], 2) + \
            pow(otsu.center_pos[1] - otsu.hero_pos[1], 2)
        ))

        if line_length > 550:
            length_time = line_length * 1.45
        else:
            length_time = line_length * 1.5

        holding = min(950, max(length_time, 300))

        print '勾股换算按键时长：', line_length, length_time, holding
        print

        return int(holding)


def run_cmd(cmd):
    return commands.getstatusoutput(cmd)


while True:
    try:
        debug = False

        if not debug:
            fn = str(int(time.time()))
            run_cmd('adb shell screencap -p /sdcard/1.png')
            run_cmd('adb pull /sdcard/1.png /tmp/{}.png'.format(fn))
            run_cmd('cp /tmp/{}.png /tmp/1.png'.format(fn))
        else:
            fn = '1'

        otsu = Otsu('/tmp/{}.png'.format(fn), debug=debug)
        holding = otsu.line_to_time()

        if not debug:
            run_cmd('adb shell input swipe 255 255 0 0 {}'.format(holding))
            time.sleep(1.4)
        else:
            raise KeyboardInterrupt
    except KeyboardInterrupt:
        raise
    except Exception as e:
        import traceback
        traceback.print_exc()
        #time.sleep(2)
