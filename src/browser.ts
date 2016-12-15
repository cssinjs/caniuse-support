/**
 * @license
 * Copyright (C) 2016 Chi Vinh Le and contributors.
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import * as bowser from "bowser";

export type BrowserID = "unknown" | "ie" | "edge" | "firefox" | "chrome" | "safari" | "opera" |
  "and_uc" | "samsung" | "bb" | "android" | "ios_saf" | "and_chr" | "ie_mob";

export type Browser = {
  id: BrowserID;
  version: string;
};

// bowser id -> caniuse id
const browserIDMap: { [id: string]: BrowserID } = {
  msie: "ie",
  msedge: "edge",
  firefox: "firefox",
  chrome: "chrome",
  safari: "safari",
  opera: "opera",
  ucbrowser: "and_uc",
  samsungBrowser: "samsung",
  blackberry: "bb",
  android: "android",
  ios: "ios_saf",
};

/**
 * @param {String} ua optional user-agent
 */
export function detectBrowser(ua?: string): Browser {
  const bowserInst = ua ? bowser._detect(ua) : bowser;
  let version = bowserInst.version;
  let bid: BrowserID = "unknown";
  for (const b in browserIDMap) {
    if (bowserInst[b]) {
      bid = browserIDMap[b];
      break;
    }
  }
  // no opera mini support yet: https://github.com/ded/bowser/issues/158
  if (bid === "chrome" && bowserInst.android) {
    bid = "and_chr";
  } else if (bid === "safari" && bowserInst.ios) {
    bid = "ios_saf";
  } else if (bid === "ie" && bowserInst.windowsphone) {
    bid = "ie_mob";
  }

  // use mobile os version.
  if (bid === "android") {
    version = bowserInst.osversion;
  } else if (bid === "ios_saf") {
    version = bowserInst.osversion;
  }
  return { id: bid, version };
}

export const currentBrowser = detectBrowser();
