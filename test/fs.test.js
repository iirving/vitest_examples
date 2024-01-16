import { test, expect, vi, describe } from "vitest";
import { loadConfig } from "../src/fs.js";

describe("with config file exists ", async () => {
  vi.mock("fs", async (importOrginal) => {
    const actualFS = await importOrginal();
    return {
      ...actualFS,
      readFileSync() {
        return '{ "name": "mocked" }';
      },
      existsSync() {
        return true;
      },
    };
  });

  test("loadConfig", async () => {
    const config = await loadConfig();

    expect(config).toEqual({
      name: "mocked",
    });
  });
});
