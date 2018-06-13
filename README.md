# caniuse-support

[![Build Status](https://travis-ci.org/cssinjs/caniuse-support.svg?branch=master)](https://travis-ci.org/cssinjs/caniuse-support)
[![Coverage Status](https://coveralls.io/repos/github/cssinjs/caniuse-support/badge.svg?branch=master)](https://coveralls.io/github/cssinjs/caniuse-support?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/cssinjs/caniuse-support.svg)](https://greenkeeper.io/)

Query the [caniuse offline database](https://github.com/Fyrd/caniuse) for feature support.

Includes browser detection using [bowser](https://github.com/ded/bowser).

## Usage

```javascript
import { getSupport, detectBrowser, currentBrowser } from "caniuse-support";

// Get feature support of current browser.
getSupport("transforms2d"); // { level: "none", needPrefix: false, notes: [] }

// Get feature support of specific browser.
getSupport("flexbox", { id: "chrome", version: "6.0" }); // { level: "partial", needPrefix: true, notes: [1] }

// Get feature support of specific browser using an user agent string.
const userAgent = "Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0";
getSupport("transforms2d", detectBrowser(userAgent)); // { level: "full", needPrefix: false, notes: [] }

// Get matching caniuse version index.
getVersionIndex(detectBrowser(userAgent)); // "26"

// For convenience, get current browser.
console.log(`${currentBrowser.id} ${currentBrowser.version}`);
```

For a list of queryable features see [here](https://github.com/Fyrd/caniuse/tree/master/features-json).

## Playground

Checkout this [code pen](http://codepen.io/wikiwi/pen/QGpgKp?editors=0012).
