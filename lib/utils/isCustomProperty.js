'use strict';

/**
 * Check whether a property is a custom one
 * @param {string} property
 * @returns {boolean}
 */
module.exports = (property) => {
	return property.startsWith('--');
};
