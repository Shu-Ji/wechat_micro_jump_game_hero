# coding: u8

import jsbeautifier


min_js_file_path = '../wx7c8d593b2c3a7703_3.wxapkg.unpack/game.js'
res = jsbeautifier.beautify_file(min_js_file_path)

open('./game.beautified.js', 'w').write(res)
