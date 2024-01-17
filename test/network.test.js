import { test, expect, vi, beforeAll, afterEach } from "vitest";
import { getPostBodybyId } from "../src/network.js";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  http.get("https://jsonplaceholder.typicode.com/posts/1", () => {
    return HttpResponse.json({
      body: "Mocked Body",
    });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.close());

test("network getPostBodybyId should fetch", async () => {
  const result = await getPostBodybyId(1);

  expect(result).toMatchInlineSnapshot(`{
      "body": "Mocked Body",
    }
  `);
});
