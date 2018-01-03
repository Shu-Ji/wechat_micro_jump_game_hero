# coding: u8

from __future__ import print_function, unicode_literals

import itertools
import os
import os.path as osp
import platform
import subprocess
import time
import traceback

import cv2
import numpy


# check python version
if int(platform.python_version_tuple()[0]) == 2:
    range = xrange
else:
    defalut_range = range
    range = lambda *args: defalut_range(*(int(arg) for arg in args))


class Otsu(object):

    GREEN = (0, 255, 0)
    BLUE = (255, 0, 0)
    RED = (0, 0, 255)
    BLACK = (0, 0, 0)

    def __init__(self, path, debug=False):
        # the bottle is purple
        self.hero_color = (56, 56, 97)
        self.path = path

        raw_im = cv2.imread(path)
        cv2.imwrite(path + '.debug.png', raw_im)
        self.im = cv2.imread(path + '.debug.png')

        self.h, self.w, _ = self.im.shape
        self.thresh = cv2.Canny(self.im, 20, 70)

        cv2.imwrite(path + '.canny.png', self.thresh)

        self.hero_pos = tuple(self.find_hero())
        is_hero_on_left = self.hero_pos[0] < self. w / 2
        print('hero pos:', self.hero_pos)

        self.top_most = self.find_top_most(is_hero_on_left)
        print('top most pos：', self.top_most)

    def find_hero(self):
        """find bottle by purple color"""

        b, g, r = numpy.asarray(self.im).T
        hp = numpy.argwhere(
            (r == self.hero_color[0]) & \
            (g == self.hero_color[1]) & \
            (b == self.hero_color[2])
        )
        return [int(i) for i in numpy.mean(hp, axis=0)]

    def find_top_most(self, is_hero_on_left):
        hero_radius = 50
        if is_hero_on_left:
            # top most is on the right, scan from right
            from_x = self.w - 1
            to_x = self.hero_pos[0] + hero_radius
            step = -1
        else:
            # top most is on the left, scan from left
            from_x = 0
            to_x = self.hero_pos[0] - hero_radius
            step = 1

        from_y, to_y = self.h / 4, self.hero_pos[1]

        for y in range(from_y, to_y):
            for x in range(from_x, to_x, step):
                if self.thresh[y, x] == 255:
                    return x, y

    def get_center_pos(self):
        distance_x = numpy.abs(self.top_most[0] - self.hero_pos[0])

        distance_y = distance_x / numpy.sqrt(3)
        distance_y = max(self.hero_pos[1] - self.top_most[1] - 100, distance_y)

        return self.top_most[0], int(self.hero_pos[1] - distance_y)

    def get_holding(self):
        center_pos = self.get_center_pos()
        print('next block center pos:', center_pos)

        distance = int(numpy.sqrt(
            pow(center_pos[0] - self.hero_pos[0], 2) + \
            pow(center_pos[1] - self.hero_pos[1], 2)
        ))

        print('distance:', distance)

        holding = int(min(950, max(distance * 1.5, 300)))
        print('holding: ', holding)
        print()

        # dray images for debugging
        fn = osp.split(self.path)[-1]
        cv2.putText(self.im, fn, (100, 120), cv2.FONT_HERSHEY_SIMPLEX, 3,
                self.RED)
        cv2.line(self.im, self.hero_pos, self.top_most, self.RED, 2)
        self.im[:, self.top_most[0]:self.top_most[0] + 3] = self.BLUE
        self.im[self.hero_pos[1]:self.hero_pos[1] + 3, :] = self.GREEN
        cv2.line(self.im, self.hero_pos, center_pos, self.BLACK, 2)
        cv2.imwrite(self.path + '.debug.png', self.im)

        return holding


def run_cmd(cmd):
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE,
            stdin=subprocess.PIPE, shell=True)
    stdout, stderr = p.communicate()
    if stderr:
        print(stderr)
    p.wait()
    return stdout, stderr


# directory where screenshot image will be saved in.
# if you use Windows, e.g 'c:/wechat_micro_jump_game_screenshot'
screenshot_directory = '/tmp/wechat_micro_jump_game_screenshot'
if not osp.exists(screenshot_directory):
    os.makedirs(screenshot_directory)


jump_times = itertools.count(0)
while True:
    try:
        debug = False

        if debug:
            # your last failed image name
            fn = '0.png'
            fp = osp.join(screenshot_directory, fn)
        else:
            fn = str(next(jump_times)) + '.png'
            fp = osp.join(screenshot_directory, fn)

            run_cmd('adb shell screencap -p /sdcard/s.png')
            run_cmd('adb pull /sdcard/s.png {}'.format(fp))

        print(fp)

        otsu = Otsu(fp, debug=debug)
        holding = otsu.get_holding()

        if debug:
            raise KeyboardInterrupt
        else:
            # random tap position
            # anti-wechat detect
            rand_x = lambda: numpy.random.randint(0, otsu.w)
            rand_y = lambda: numpy.random.randint(0, otsu.h * 3 / 4)
            x1, y1 = rand_x(), rand_y()
            x2, y2 = rand_x(), rand_y()

            run_cmd('adb shell input swipe {0} {1} {2} {3} {4}'.format(
                x1, y1, x2, y2, holding))
            time.sleep(1.3 + numpy.random.random())
    except KeyboardInterrupt:
        raise KeyboardInterrupt
    except:
        traceback.print_exc()
        time.sleep(2)
