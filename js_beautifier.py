# coding: u8

import jsbeautifier


opts = jsbeautifier.default_options()
opts.indent_size = 2
opts.break_chained_methods = True
opts.comma_first = True

min_js_file_path = '../wx7c8d593b2c3a7703_3.wxapkg.unpack/game.js'
res = jsbeautifier.beautify_file(min_js_file_path)

open('./game.beautified2.js', 'w').write(res)
