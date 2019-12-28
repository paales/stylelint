'use strict';

/**
 * @param {string} source
 *
 * @returns {string}
 */
module.exports = (source, blurChar = ' ') => source.replace(/[#@{}]+/g, blurChar);
