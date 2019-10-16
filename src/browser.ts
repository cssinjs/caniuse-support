/**
 * @license
 * Copyright (C) 2016 Chi Vinh Le and contributors.
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import * as Bowser from "bowser";

export type BrowserID = "unknown" | "ie" | "edge" | "firefox" | "chrome" | "safari" | "opera" |
  "and_uc" | "samsung" | "bb" | "android" | "ios_saf" | "and_chr" | "ie_mob";

export interface Browser {
  id: BrowserID;
  version: string;
}

// bowser id -> caniuse id
const browserIDMap: { [id: string]: BrowserID } = {
  "internet explorer": "ie",
  "microsoft edge": "edge",
  firefox: "firefox",
  chrome: "chrome",
  safari: "safari",
  opera: "opera",
  "uc browser": "and_uc",
  "samsung internet for android": "samsung",
  blackberry: "bb",
  "android browser": "android",
  ios: "ios_saf",
};

/**
 * @param {String} ua optional user-agent
 */
export function detectBrowser(ua: string): Browser {
  const bowserInst = Bowser.getParser(ua);
  let bid: BrowserID = "unknown";
  let version = (bowserInst.getBrowserVersion() || '').toString();
  for (const b in browserIDMap) {
    if (bowserInst.getBrowserName().toLowerCase() === b) {
      bid = browserIDMap[b];
      break;
    }
  }
  // no opera mini support yet: https://github.com/ded/bowser/issues/158
  // no chrome for android detection as it largely matches the desktop version which
  // is better tracked in the caniuse database.
  if (bid === "safari" && bowserInst.getOS().name === "iOS") {
    bid = "ios_saf";
  } else if (bid === "ie" && bowserInst.getOS().name === "Windows Phone") {
    bid = "ie_mob";
  }

  // use mobile os version.
  if (bid === "android") {
    version = bowserInst.getOSVersion().toString();
  } else if (bid === "ios_saf") {
    version = bowserInst.getOSVersion().toString();
  }

  return { id: bid, version };
}
