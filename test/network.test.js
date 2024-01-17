import { test, expect } from "vitest";
import { getPostBodybyId } from "../src/network.js";

test("network getPostBodybyId should fetch", async () => {
  const id = 1;
  const result = await getPostBodybyId(id);

  const expected = `Mocked Body for id: ${id}`.toString();
  expect(result).toEqual(expected);
});

test("network getPostBodybyId should fetch for id = 66", async () => {
  const id = 66;
  const result = await getPostBodybyId(id);

  const expected = `Mocked Body for id: ${id}`.toString();
  expect(result).toEqual(expected);
});
