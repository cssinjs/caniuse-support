/**
 * @license
 * Copyright (C) 2016 Chi Vinh Le and contributors.
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

/* tslint:disable: max-line-length */

const fixture: any = {
  "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 9 Build/LMY48T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Safari/537.36": {
    browser: { id: "and_chr", version: "47.0" },
    features: {
      transforms2d: { level: "unknown", needPrefix: false, notes: [] },
      flexbox: { level: "unknown", needPrefix: false, notes: [] },
    },
  },
  "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0)": {
    browser: { id: "ie", version: "9.0" },
    features: {
      transforms2d: { level: "full", needPrefix: true, notes: [] },
      flexbox: { level: "none", needPrefix: false, notes: [] },
    },
  },
  "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Xbox; Xbox One)": {
    browser: { id: "ie", version: "10.0" },
    features: {
      transforms2d: { level: "full", needPrefix: false, notes: [] },
      flexbox: { level: "partial", needPrefix: true, notes: [2, 4] },
    },
  },
  "Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; rv:11.0) like Gecko": {
    browser: { id: "ie", version: "11.0" },
    features: {
      transforms2d: { level: "full", needPrefix: false, notes: [] },
      flexbox: { level: "partial", needPrefix: false, notes: [4] },
    },
  },
  "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0": {
    browser: { id: "edge", version: "12.0" },
    features: {
      transforms2d: { level: "full", needPrefix: false, notes: [] },
      flexbox: { level: "full", needPrefix: false, notes: [] },
    },
  },
  "Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0": {
    browser: { id: "firefox", version: "26.0" },
    features: {
      transforms2d: { level: "full", needPrefix: false, notes: [] },
      flexbox: { level: "partial", needPrefix: false, notes: [3] },
    },
  },
  "Mozilla/5.0 (Windows NT 5.1; rv:6.0) Gecko/20100101 Firefox/6.0 FirePHP/0.6": {
    browser: { id: "firefox", version: "6.0" },
    features: {
      transforms2d: { level: "full", needPrefix: true, notes: [] },
      flexbox: { level: "partial", needPrefix: true, notes: [1] },
    },
  },
  "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+": {
    browser: { id: "bb", version: "7.2" },
    features: {
      transforms2d: { level: "full", needPrefix: true, notes: [] },
      flexbox: { level: "partial", needPrefix: true, notes: [1] },
    },
  },
  "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920; Vodafone)": {
    browser: { id: "ie_mob", version: "10.0" },
    features: {
      transforms2d: { level: "full", needPrefix: false, notes: [] },
      flexbox: { level: "partial", needPrefix: true, notes: [2] },
    },
  },
  "Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; T-Mobile G2 Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1": {
    browser: { id: "android", version: "2.3.4" },
    features: {
      transforms2d: { level: "full", needPrefix: true, notes: [] },
      flexbox: { level: "partial", needPrefix: true, notes: [1] },
    },
  },
  "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X; en-US) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/13E238 UCBrowser/10.7.0.782 Mobile": {
    browser: { id: "and_uc", version: "10.7.0.782" },
    features: {
      transforms2d: { level: "unknown", needPrefix: false, notes: [] },
      flexbox: { level: "unknown", needPrefix: false, notes: [] },
    },
  },
  "Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG SM-G925F Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36": {
    browser: { id: "samsung", version: "4.0" },
    features: {
      transforms2d: { level: "full", needPrefix: false, notes: [] },
      flexbox: { level: "full", needPrefix: false, notes: [] },
    },
  },
  "Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53": {
    browser: { id: "ios_saf", version: "7.0.4" },
    features: {
      transforms2d: { level: "full", needPrefix: true, notes: [] },
      flexbox: { level: "full", needPrefix: true, notes: [] },
    },
  },
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13+ (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2": {
    browser: { id: "safari", version: "5.1" },
    features: {
      transforms2d: { level: "full", needPrefix: true, notes: [] },
      flexbox: { level: "partial", needPrefix: true, notes: [1] },
    },
  },
  "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36 OPR/15.0.1147.100": {
    browser: { id: "opera", version: "15.0" },
    features: {
      transforms2d: { level: "full", needPrefix: true, notes: [] },
      flexbox: { level: "full", needPrefix: true, notes: [] },
    },
  },
  "Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/534.3 (KHTML, like Gecko) Chrome/6.0.462.0 Safari/534.3": {
    browser: { id: "chrome", version: "6.0" },
    features: {
      transforms2d: { level: "full", needPrefix: true, notes: [] },
      flexbox: { level: "partial", needPrefix: true, notes: [1] },
    },
  },
};

export default fixture;
