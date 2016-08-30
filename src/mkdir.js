/* mkdir.js - mkdir (const char *filename, mode_t mode)
 *
 * Copyright (c) 2016, Mark Bauermeister
 *
 * This software may be modified and distributed under the terms
 * of the BSD license.  See the LICENSE file for details.
 */

var {Cu} = require("chrome");
var {ctypes} = Cu.import("resource://gre/modules/ctypes.jsm", null);
var libc = ctypes.open("libc.so.6");

function mkdir(file, mode) {
    var mkdir = libc.declare("mkdir",           /* Function name */
                            ctypes.default_abi, /* Calling ABI */
                            ctypes.int,         /* Return type */
                            ctypes.char.ptr,    /* Argument type */
                            ctypes.uint32_t);   /* Mode bit */
    mkdir(file, mode);
}

module.exports = mkdir;