# caniuse-support

Query the [caniuse offline database](https://github.com/Fyrd/caniuse) for feature support.


## Usage

```javascript
import { getSupport, detectBrowser, currentBrowser } from "caniuse-support";

// Get feature support of current browser.
getSupport("transforms2d"); // { level: "none", needPrefix: false }

// Get feature support of another browser.
getSupport("flexbox", { id: "chrome", version: "6.0" }); // { level: "partial", needPrefix: true }

// Get feature support of another browser using an user agent string.
const userAgent = "Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0";
getSupport("transforms2d", detectBrowser(userAgent)); // { level: "full", needPrefix: false }

// For convenience, show current browser detection.
console.log(`${currentBrowser.id} ${currentBrowser.version}`);
```

For a list of queryable features see [here](https://github.com/Fyrd/caniuse/tree/master/features-json).

[![NPM Version Widget]][npm version]
[![Build Status Widget]][build status]
[![Coverage Status Widget]][coverage status]

## Contributions

Contributions welcome! Make sure to pass `$ npm run all`.

[npm version]: https://www.npmjs.com/package/caniuse-support

[npm version widget]: https://img.shields.io/npm/v/caniuse-support.svg?style=flat-square

[build status]: https://travis-ci.org/wikiwi/caniuse-support

[build status widget]: https://img.shields.io/travis/wikiwi/caniuse-support/master.svg?style=flat-square

[coverage status]: https://coveralls.io/github/wikiwi/caniuse-support?branch=master

[coverage status widget]: https://img.shields.io/coveralls/wikiwi/caniuse-support/master.svg?style=flat-square
