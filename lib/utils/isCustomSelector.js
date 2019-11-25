'use strict';

/**
 * Check whether a selector is a custom one
 *
 * @param {string} selector
 * @returns {boolean}
 */
module.exports = (selector) => {
	return selector.startsWith(':--');
};
