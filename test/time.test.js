import { test, expect, vi } from "vitest";
import { getCurrentTime } from "../src/time.js";

test("time getCurrentTime", () => {
  vi.setSystemTime(new Date("2021-06-29T17:52:11.000Z"));

  const time = getCurrentTime();

  expect(time).toBe(`13:52:11`);

  vi.useRealTimers();
});
