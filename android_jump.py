# coding: u8

from __future__ import print_function, unicode_literals

import itertools
import os.path as osp
import time
import traceback

import numpy

from libjump import Otsu, run_cmd, create_screenshot_directory


# directory where screenshot image will be saved in.
# if you use Windows, e.g 'c:/wechat_micro_jump_game_screenshot'
screenshot_directory = '/tmp/wechat_micro_jump_game_screenshot'
create_screenshot_directory(screenshot_directory)


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

        otsu = Otsu(fp, debug, 1.5)
        holding = int(otsu.get_holding())

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
            sleep_time = .5
            time.sleep(sleep_time)
            print('sleeping seconds', sleep_time)
            print()
    except KeyboardInterrupt:
        raise KeyboardInterrupt
    except:
        traceback.print_exc()
        time.sleep(2)
