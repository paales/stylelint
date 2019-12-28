'use strict';

/**
 * Check if a string is a single line (i.e. does not contain
 * any newline characters).
 *
 * @param {string} input
 * @return {boolean}
 */
module.exports = (input) => !/[\n\r]/.test(input);
