# 声明

请勿将此用于任何商业用途，仅供个人使用。

使用此工程带来的后果，由使用者自己承担，与本工程作者完全无关。

克隆、fork、下载，即代表您遵循此声明。


## 目录结构说明

    .
    ├── game.beautified.js  # 美化后的小游戏源码[移除了 three.js 的库代码]
    ├── game_js_beautifier.py  # 美化 game.js
    ├── LICENSE
    ├── main_cv.py  # 自动跳 opencv 版本
    ├── main.py  # 自动跳 pillow 版本
    ├── Pipfile
    ├── Pipfile.lock
    └── README.md


## 原理说明

普通版本（main.py）：

![普通版本](http://upload-images.jianshu.io/upload_images/576195-ebb3e6782df3c0b3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

优化版本(main_cv.py)：

![优化版本](http://upload-images.jianshu.io/upload_images/576195-5f5ced00075de3cd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

调试时，修改 debug 为 True，真实运行时，设置为 False。停顿时间设置为 2s，如果电脑运算速度太快，保险起见可以设置为 2s。


原理：

1. adb 截图
1. 找到小人臀部坐标（hsv 色相紫黑色）
1. 找到下一桥墩的顶点坐标
1. 找到下一桥墩的极左/极右点坐标
1. 计算出下一桥墩的中心点坐标
1. 从小人臀部到下一桥墩中心点计算出跳远距离
1. 将距离换算为长按时长
1. 使用 adb 跳

## 更新日志

**2018-01-04**

由于微信的小游戏的更新，基于背景 hsv 查找极点的方式，对于亮色背景，已经不再适用。

更新为使用轮廓区域获取顶点，再由商高定理计算中心点坐标。

**2018-01-01**

目的只是找到极点，并不需要二值化，去除相关代码。速度快。

目前以 距离 x 1.5 作为长按时长，基本能跳到目标中心位置。

**2017-12-30**

去除垂直投影图的方案，使用直接识别背景的方式去除背景，并二值化，以识别“极点”。速度仍然慢。

**2017-12-29**

第一可用版本，准确性不高，速度慢，使用垂直投影图进行目标查找。


## 开发环境搭建


### 系统环境

笔者环境：

    $ uname -a
    Darwin rmbp-finn.lan 17.3.0 Darwin Kernel Version 17.3.0: Thu Nov  9 18:09:22 PST 2017; root:xnu-4570.31.3~1/RELEASE_X86_64 x86_64

    $ python --version
    Python 2.7.10

    $ python3 --version
    Python 3.6.1

    $ adb version
    Android Debug Bridge version 1.0.39

    $ 测试机
    小米5

### 安装 Python 2.7+ 或 Python 3.5+

略。

### (可选安装) virtualenv, virtualenvwrapper

略。

### 安装 adb

略。

### 工程搭建


先 fork 一份到自己账户。然后：

    $ mkvirtualenv wechat_micro_jump_game_hero
    $ cdvitualenv
    $ git clone ...
    $ cd wechat_micro_jump_game_hero
    $ echo `pwd` > ../.project
    $ pip install pipenv
    $ pipenv install

手机连上电脑，确保

    $ adb devices

显示了安卓设备。

设备打开跳一跳小游戏，并点击开始，之后：

    # 普通版本(使用去除的背景的方式进行极点查找)
    $ python main.py

    # 优化版本(使用Canny算子找顶点，使用直角定理找极点)
    $ python main_cv.py


### 调试说明

修改 debug 为 true 将进入启动调试模式。

同时需要修改 fn 变量为想要调试的图片（一般是上一次跳失败的图片，用来调试为什么失败），如 "25.png"。

调试模式中，会打开 fn 指定的图片，并画出相关坐标点，以及背景识别图。（将会打开两个图片用于调试）

### 注意事项

根据不同的手机型号（主要是屏幕分辨率）可能需要修改的几个地方：

1. 请关闭手机的悬浮球，或者将其放置于屏幕最下方中间位置，以防止干扰。
1. 指定 screenshot_directory 为截图保存路径。程序运行时，可以随时打开此目录查看其中生成的图片。
1. 函数 find_hero(self) 中小人色取的是紫黑色：self.pixels[x, y] == (56, 56, 97, 255)。不知道不同手机显示的颜色是否一样。
1. 函数 get_background_hsv(self) 中获取背景色的坐标，代码中为 (10, 800)。此参数是一个大概位于您手机屏幕竖直方向中间的某个点，确保此点一直是背景。大致坐标为(10, self.h * 0.42)，即(10, 屏幕高 * 0.42)，目前屏幕已经做了自适应，一般无需再设置。
1. 函数 is_same_color(self, h, s, v, bg_hsv) 关于颜色是否相同的对比，其中的 h 和 s 两个值需要根据情况修改，一般来说，亮背景（灰白、黄色）时大一点点的值效果会好些，暗背景（紫色、蓝色等）时小一点点会好些，代码已经做了一部分的自适应，目前此 hsv 不太适用于粉色。
1. 函数 get_holding(self) 中距离转换按键时长的系数，以及 max 和 min 中的两个参数，需要自己修改尝试。
