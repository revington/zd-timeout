'use strict';
const {
    ensureMilliseconds,
    ensureFunction,
    ensureCallback
} = require('./lib/util');

function create(fn, milliseconds) {
    ensureMilliseconds(milliseconds);
    ensureFunction(fn);
    return function (...args) {
        var t, timedout, callback = args.pop();
        ensureCallback(callback);
        t = setTimeout(function () {
            timedout = true;
            return callback(new Error('timeout'));
        }, milliseconds);
        fn(...args, function (...cbArgs) {
            // clear timeout
            if (t) {
                clearTimeout(t);
            }
            // if callback has fired before because of timeout, return
            if (timedout) {
                return;
            }
            return callback(...cbArgs);
        });
    }
}
exports = module.exports = create;
