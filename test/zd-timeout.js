'use strict';
const assert = require('assert');
const timeout = require('..');
describe('zd-timeout', function () {
    describe('A function is wrapped with timeout', function () {
        before(function (done) {
            var self = this;
            self.result;

            function wait(...params) {
                var cb = params.pop();
                setImmediate(function () {
                    return cb(null, params);
                });
            }
            let fn = timeout(wait, 500);
            fn('a', 2, function (err, data) {
                if (err) {
                    return done(err);
                }
                self.result = data;
            });
            setTimeout(done, 1000);
        });
        it('should pass params to function', function () {
            assert.deepStrictEqual(this.result, ['a', 2]);
        });
    });
    describe('Callback is not triggered before #milliseconds', function () {
        before(function (done) {
            var self = this;
            self.result;
            self.i = 0;

            function wait(...params) {
                var cb = params.pop();
                setTimeout(function () {
                    return cb(null, params);
                }, 500);
            }
            let fn = timeout(wait, 100);
            fn('a', 2, function (err, data) {
                self.i++;
                if (err) {
                    self.error = err;
                    return;
                }
                self.error = new Error('did not time out');
            });
            setTimeout(done, 1000);
        });
        it('should callback a timeout error', function () {
	    assert.deepStrictEqual(this.error.message, 'timeout');
        });
        it('callback should be invoked only once', function () {
	    assert.deepStrictEqual(this.i, 1);
        });
    });
});
