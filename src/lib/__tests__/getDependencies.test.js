/* eslint-env node */
import {
  getDependencies,
  ensureRemoteComponentConfig
} from "../getDependencies";

describe("lib/getDependencies", () => {
  test("getDependencies returns {}", () => {
    const actual = getDependencies();
    const expected = {};
    expect(actual).toStrictEqual(expected);
  });

  test("ensureRemoteComponentConfig keeps config", () => {
    const config = {
      resolve: {}
    };
    config.resolve["remote-component.config.js"] = config;

    const expected = config.resolve;
    const actual = ensureRemoteComponentConfig(config);
    expect(actual).toBe(expected);
  });

  test("ensureRemoteComponentConfig sets remote-component.config.js recursively", () => {
    const config = {
      resolve: {}
    };

    const resolve = ensureRemoteComponentConfig(config);
    const actual = resolve["remote-component.config.js"].resolve;
    expect(actual).toEqual(resolve);
  });
});
