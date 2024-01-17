import { warnLater } from "../src/timer.js";
import { test, expect, vi } from "vitest";

test("timer warnLater", async () => {
  const logSpy = vi.spyOn(console, "log");

  warnLater("Hello, world!");

  expect(logSpy).not.toHaveBeenCalled();

  await new Promise((resolve) => setTimeout(resolve, 2_000));

  expect(logSpy).toHaveBeenCalledWith("Hello, world!");
});
