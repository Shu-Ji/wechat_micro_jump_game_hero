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
        self.hero_pos, self.thresh = self.erase_bg(gray)
        print '小人臀部坐标：', self.hero_pos
        self.draw_pos(self.hero_pos)

        self.top_most = self.find_top_most(self.thresh)
        print '顶点坐标：', self.top_most
        self.draw_pos(self.top_most)

        self.lr_most = self.find_left_or_right_most(self.thresh)
        print '极左/右坐标：', self.lr_most
        self.draw_pos(self.lr_most)

        self.center_pos = self.top_most[0], self.lr_most[1]
        print '中点坐标：', self.center_pos
        self.draw_pos(self.center_pos)

        cx, cy = self.center_pos
        hx, hy = self.hero_pos
        self.draw.line((cx, cy, hx, hy), fill=(0, 255, 0), width=8)

        if debug:
            self.im.show()
            self.thresh.show()

    def rgb_to_hsv(self, r, g, b, a=255):
        h, s, v = colorsys.rgb_to_hsv(r / 255., g / 255., b / 255.)
        return int(h * 255.), int(s * 255.), int(v * 255.)

    def erase_bg(self, gray):
        # 去除背景
        pixels = self.im.load()

        # 启动时，获取右下脚某个点的颜色，视为背景色，将背景设置为黑色
        # 其余设置为白色
        bg_color = pixels[10, 800]
        bg_h, bg_s, bg_v = self.rgb_to_hsv(*bg_color)
        print '背景 hsv：', self.rgb_to_hsv(*bg_color)
        hero_poses = []

        def is_same(h, s, v):
            dh = min(abs(h - bg_h), 360 - abs(h - bg_h)) / 180.
            ds = abs(s - bg_s)
            dv = abs(v - bg_v) / 255.
            distance = math.sqrt(dh * dh + ds * ds + dv * dv)
            return distance < 0.2

        for y in xrange(self.h / 4, self.h * 3 / 4):
            for x in xrange(self.w):
                # 是否与臀部的紫色相同
                if pixels[x, y] == (56, 56, 97, 255):
                    hero_poses.append((x, y))

                h, s, v = self.rgb_to_hsv(*pixels[x, y])
                if (abs(h - bg_h) < 10) and (abs(s - bg_s) < 20):
                #if is_same(h, s, v):
                    gray.putpixel((x, y), 0)
                else:
                    gray.putpixel((x, y), 255)
        # 取平均坐标，作为小人坐标
        hero_pos = map(lambda i: sum(i) / len(i), zip(*hero_poses))
        return hero_pos, gray

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
        length_time = line_length * 1.5
        holding = min(950, max(length_time, 350))

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
            time.sleep(1.9)
        else:
            raise KeyboardInterrupt
    except KeyboardInterrupt:
        raise
    except Exception as e:
        import traceback
        traceback.print_exc()
        #time.sleep(2)
