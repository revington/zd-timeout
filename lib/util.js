'use strict';
const assert = require('assert');

function ensureMilliseconds(milliseconds) {
    assert.deepEqual(false, Number.isNaN(+milliseconds), 'milliseconds must be a number');
    assert(milliseconds > 0, 'milliseconds must be higher than zero');
}

function ensureFunction(fn) {
    assert(fn, 'A function is required');
    assert.deepEqual(typeof fn, 'function', 'fn parameter is not a function');
}

function ensureCallback(callback) {
    assert.deepEqual(typeof callback, 'function', 'callback not provided');
}
