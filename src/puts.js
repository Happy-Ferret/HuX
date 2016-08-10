/* puts.js - puts (const char *s)
 *
 * Copyright (c) 2016, Mark Bauermeister
 *
 * This software may be modified and distributed under the terms
 * of the BSD license.  See the LICENSE file for details.
 */

var {Cu} = require("chrome");
var {ctypes} = Cu.import("resource://gre/modules/ctypes.jsm", null);
var libc = ctypes.open("libc.so.6");

function puts(str) {

    var puts = libc.declare("puts",             /* Function name */
                            ctypes.default_abi, /* Calling ABI */
                            ctypes.int,         /* Return type */
                            ctypes.char.ptr);   /* Argument type */
    puts(str);
}

module.exports = puts;