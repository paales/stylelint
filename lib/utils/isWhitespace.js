'use strict';

/**
 * Check if a character is whitespace.
 *
 * @param {string} char
 * @returns {boolean}
 */
module.exports = (char) => [' ', '\n', '\t', '\r', '\f'].includes(char);
