import { test, expect } from "vitest";
import { deepMerge } from "../src/index.js";

test("shallowMerge simple", () => {
  const merged = deepMerge({ a: 1 }, { b: 2 });
  expect(merged).toEqual({ a: 1, b: 2 });
});

test("shallowMerge simple next ", () => {
  const objA = { name: "Ian" };
  const objB = { age: 35 };
  const merged = deepMerge(objA, objB);

  expect(merged).toEqual({ name: "Ian", age: 35 });
});

test("shallowMerge with overlaps ", () => {
  const objA = { name: "Ian", age: 34 };
  const objB = { age: 35, location: "UK" };
  const merged = deepMerge(objA, objB);

  expect(merged).toEqual({ name: "Ian", age: 35, location: "UK" });
});

test("shallowMerge with arrays ", () => {
  const arrayOne = [1, 2];
  const arrayTwo = ["B", "C"];
  const merged = deepMerge(arrayOne, arrayTwo);

  expect(merged).toEqual([1, 2, "B", "C"]);
});

test("deepMerge with overlaps ", () => {
  const objA = {
    name: "Ian",
    details: {
      age: 34,
    },
  };
  const objB = {
    details: {
      location: "UK",
    },
  };
  const merged = deepMerge(objA, objB);
  console.log(merged);
  expect(merged).toEqual({
    name: "Ian",
    details: {
      age: 34,
      location: "UK",
    },
  });
});
