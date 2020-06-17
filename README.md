[![Build Status](https://travis-ci.org/revington/zd-timeout.svg?branch=master)](https://travis-ci.org/revington/zd-timeout)
[![Known Vulnerabilities](https://snyk.io/test/github/revington/zd-timeout/badge.svg?targetFile=package.json)](https://snyk.io/test/github/revington/zd-timeout?targetFile=package.json)
[![Coverage Status](https://coveralls.io/repos/github/revington/zd-timeout/badge.svg?branch=master)](https://coveralls.io/github/revington/zd-timeout?branch=master)
# zd-timeout
Set a timeout for an async (callback async) function

## Install
```
$ npm install zd-timeout
```

## Usage 

```javascript
const {
    timeout
} = require('zd-timeout');

function request(a, b, callback){/*...*/}
let requestLimitedTo1Minute = timeout(request, 60 * 1000);
var a = 1;
var b = 2;
requestLimitedTo1Minute(a, b, function(err, data){/*...*/}
```

## API
* `timeout(fn, milliseconds)` 
