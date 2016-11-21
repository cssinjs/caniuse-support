/**
 * @license
 * Copyright (C) 2016 Chi Vinh Le and contributors.
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { assert } from "chai";

import { detectBrowser } from "./index";
import fixture from "../test/fixture";

describe("browser.ts", () => {
  describe("detectBrowserID()", () => {
    it("should detect browser id", () => {
      for (const ua in fixture) {
        assert.deepEqual(detectBrowser(ua), fixture[ua].browser, `Invalid browser id for ${ua}`);
      }
    });
  });
});
