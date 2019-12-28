'use strict';

/**
 * @param {string} ruleName
 * @param {Function} rule
 * @returns {{ruleName: string, rule: Function}}
 */
module.exports = (ruleName, rule) => ({
	ruleName,
	rule,
});
