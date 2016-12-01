/**
 * @license
 * Copyright (C) 2016 Chi Vinh Le and contributors.
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

/* tslint:disable: no-var-requires */

import { currentBrowser } from "./browser";

const db = require("caniuse-db/data.json");

export interface Support {
  level: "unknown" | "none" | "partial" | "full";
  needPrefix: boolean;
  notes: number[];
}

/**
 * Query the caniuse database for feature support.
 *
 * @param {String} feature see full list https://github.com/Fyrd/caniuse/tree/master/features-json.
 * @param {{id: string; version: string}} browser
 */
export function getSupport(feature: string, browser = currentBrowser): Support {
  const targetVersion = parseFloat(browser.version as string);
  const support: Support = { level: "unknown", needPrefix: false, notes: [] };
  const stats = db.data[feature].stats[browser.id];
  if (!stats) { return support; }
  // sorted contains a list with sorted version numbers.
  const sorted = Object.keys(stats).sort((a, b) => parseFloat(a) - parseFloat(b));

  // at the end of this loop, match contains the stat value of the closest matching
  // from <= targetVersion.
  let match = "";
  for (const v of sorted) {
    const [from] = v.split("-").map((x) => parseFloat(x));
    if (targetVersion >= from) {
      match = stats[v];
    } else {
      break;
    }
  }
  if (match) {
    if (match.indexOf("y") !== -1) {
      support.level = "full";
    } else if (match.indexOf("a") !== -1) {
      support.level = "partial";
    } else {
      support.level = "none";
    }
    support.needPrefix = match.indexOf("x") !== -1;
    match.split(" ").forEach((s) => {
      if (s === "y") {
        support.level = "full";
      } else if (s === "a") {
        support.level = "partial";
      } else if (s[0] === "#") {
        support.notes.push(parseInt(s.substr(1), 10));
      }
    });
  }
  return support;
}
