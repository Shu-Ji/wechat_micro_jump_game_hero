# coding: u8

from __future__ import print_function, unicode_literals

import itertools
import time
import os.path as osp
import traceback

import numpy
import wda

from libjump import Otsu, run_cmd, create_screenshot_directory

# Please install iOS environment
# https://testerhome.com/topics/10466

# directory where screenshot image will be saved in.
# if you use Windows, e.g 'c:/wechat_micro_jump_game_screenshot'
screenshot_directory = '/tmp/wechat_micro_jump_game_screenshot'
create_screenshot_directory(screenshot_directory)

ios = wda.Client('http://localhost:8100')
ios_session = ios.session()
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

            t1 = time.time()
            ios.screenshot(fp)
            t2 = time.time()
            print('time of screenshot', t2 - t1)

        print(fp)

        otsu = Otsu(fp, debug, 2.0)
        holding = otsu.get_holding() / 1000.

        if debug:
            raise KeyboardInterrupt
        else:
            rand_x = lambda: numpy.random.randint(0, otsu.w)
            rand_y = lambda: numpy.random.randint(otsu.h / 2, otsu.h * 3 / 4)
            x1, y1 = rand_x(), rand_y()
            x2, y2 = rand_x(), rand_y()

            t1 = time.time()
            ios_session.tap_hold(x1, y1, holding)
            t2 = time.time()
            print('time of tap', t2 - t1)
            sleep_time = 0.4
            time.sleep(sleep_time)
            print('sleeping seconds', sleep_time)
            print()
    except KeyboardInterrupt:
        raise KeyboardInterrupt
    except:
        traceback.print_exc()
        time.sleep(2)
