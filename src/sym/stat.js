/* stat.js - symbolic constants.
 *
 * Copyright (c) 2016, Mark Bauermeister
 *
 * This software may be modified and distributed under the terms
 * of the BSD license.  See the LICENSE file for details.
 */

const stat = {};
stat.S_IXUSR = 0100;
stat.S_IWUSR = 0200;
stat.S_IRUSR = 0400;

stat.S_IRWXU = stat.S_IRUSR | stat.S_IWUSR | stat.S_IXUSR;

module.exports = stat;