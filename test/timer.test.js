/**
 * @fileoverview This file contains test cases for the timer module.
 * @module timer.test
 */

import { warnLater } from "../src/timer.js";
import { test, expect, vi, beforeEach } from "vitest";

/**
 * Sets up the fake timers before each test case.
 */
beforeEach(() => {
  vi.useFakeTimers();
});

/**
 * Skipped test case for the timer warnLater function with long duration.
 * the promise wrapped setTime will take 2 seconds and cuase the the test suite to fail
 * this test case is skipped to avoid the failure
 * keep here only as a example of the simple simplest way to pass the test, in theory
 */
// test.skip("timer warnLater incremental with setTimeout WARNING long duration ", async () => {
//   const sampleString = "Hello world!";
//   const logSpy = vi.spyOn(console, "log");

//   warnLater(sampleString);
//   expect(logSpy).not.toHaveBeenCalled();

//   await new Promise((resolve) => setTimeout(resolve, 2_000));

//   expect(logSpy).toHaveBeenCalledWith(sampleString);
// });

/**
 * Test case for the timer warnLater function with incremental time.
 * It checks if the log message is not called immediately and is called after a specific time.
 */
test("timer warnLater incremental ", async () => {
  const sampleString = "Hello world!";

  const logSpy = vi.spyOn(console, "log");

  warnLater(sampleString);
  expect(logSpy).not.toHaveBeenCalled();

  vi.advanceTimersByTime(1999);
  expect(logSpy).not.toHaveBeenCalled();

  vi.advanceTimersByTime(1);
  expect(logSpy).toHaveBeenCalledWith(sampleString);
});

/**
 * Test case for the timer warnLater function.
 * It checks if the log message is not called immediately and is called when the next timer is reached.
 */
test("timer warnLater", async () => {
  const sampleString = "Hello world!";

  const logSpy = vi.spyOn(console, "log");

  warnLater(sampleString);
  expect(logSpy).not.toHaveBeenCalled();

  vi.advanceTimersToNextTimer();
  expect(logSpy).toHaveBeenCalledWith(sampleString);
});
