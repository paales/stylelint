'use strict';

/**
 * Check whether a media query is a custom
 * @param {string} mediaQuery
 * @returns {boolean}
 */
module.exports = (mediaQuery) => mediaQuery.startsWith('--');
