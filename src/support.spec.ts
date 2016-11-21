/**
 * @license
 * Copyright (C) 2016 Chi Vinh Le and contributors.
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { assert } from "chai";

import { getSupport } from "./index";
import fixture from "../test/fixture";

describe("index.ts", () => {
  describe("getSupport()", () => {
    it("should detect support", () => {
      for (const ua in fixture) {
        for (const feature in fixture[ua].features) {
          assert.deepEqual(
            getSupport(feature, fixture[ua].browser),
            fixture[ua].features[feature],
            `Invalid ${feature} support for ${ua}`,
          );
        }
      }
    });
  });
});
