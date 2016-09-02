/* main.js - Main library module exposing all the other modules' functionality.
 *
 * Copyright (c) 2016, Mark Bauermeister
 *
 * This software may be modified and distributed under the terms
 * of the BSD license.  See the LICENSE file for details.
 */

module.exports = {
    mkdir: require("./src/mkdir"),
    puts: require("./src/puts"),
    stat: require("./src/sym/stat")
};
