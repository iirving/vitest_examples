import { test, expect, vi, beforeAll, afterEach } from "vitest";
import { getPostBodybyId } from "../src/network.js";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  http.get("https://jsonplaceholder.typicode.com/posts/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      body: "Mocked Body for id: " + id,
    });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.close());

// test("network getPostBodybyId should fetch", async () => {
//   const id = 1;
//   const result = await getPostBodybyId(id);

//   expect(result).toMatchInlineSnapshot(`"Mocked Body for id: 1"`);
// });

test("network getPostBodybyId should fetch for id = 66", async () => {
  const id = 66;
  const result = await getPostBodybyId(id);

  expect(result).toMatchInlineSnapshot(`"Mocked Body for id: 66"`);
});
