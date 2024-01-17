/**
 * using msw version 1.3.2
 * to install npm i msw@1.3.2 -D
 * or switch to v^2 as of septemeber 2023
 */

import { test, expect, vi, beforeAll, afterEach, afterAll } from "vitest";
import { getPostBodybyId } from "../src/network.js";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get(
    "https://jsonplaceholder.typicode.com/posts/:id",
    (restRequest, restResponse, context) => {
      const id = restRequest.params.id;
      return restResponse(
        context.status(200),
        context.json({
          body: "Mocked Body for id: " + id,
        })
      );
    }
  )
);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

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
