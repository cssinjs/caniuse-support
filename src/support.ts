/**
 * @license
 * Copyright (C) 2016 Chi Vinh Le and contributors.
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

/* tslint:disable: no-var-requires */

import { currentBrowser, Browser } from "./browser";

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
  const support: Support = { level: "unknown", needPrefix: false, notes: [] };
  let stats;
  if (db.data[feature].stats[browser.id]) {
    stats = db.data[feature].stats[browser.id]
  } else {
    return support;
  }

  const versionIdx = getVersionIndex(browser);
  if (versionIdx) {
    const value = stats[versionIdx];
    if (value.indexOf("y") !== -1) {
      support.level = "full";
    } else if (value.indexOf("a") !== -1) {
      support.level = "partial";
    } else {
      support.level = "none";
    }
    support.needPrefix = value.indexOf("x") !== -1;
    value.split(" ").forEach((s: string) => {
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

/**
 * Get matching browser version index of the caniuse db.
 * Will return last known version index if target version > any known versions.
 * Returns an empty string if target version < any known versions.
 *
 * @param {{id: string; version: string}} browser
 */
export function getVersionIndex(browser: Browser): string {
  const targetVersion = parseFloat(browser.version);
  const stats = db.data["css-appearance"].stats[browser.id];
  if (!stats) { return ""; }
  // Sorted contains a list with sorted version numbers.
  const sorted = Object.keys(stats).sort((a, b) => parseFloat(a) - parseFloat(b));

  // At the end of this loop, match contains the closest matching version.
  let match = "";
  for (const v of sorted) {
    const [from] = v.split("-").map((x) => parseFloat(x));
    if (targetVersion >= from) {
      match = v;
    } else {
      break;
    }
  }
  return match;
}
