/**
 * using msw version 1.3.2
 * to install npm i msw@1.3.2 -D
 * or switch to v^2 as of septemeber 2023
 */

import { beforeAll, afterEach, afterAll } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  http.get("https://jsonplaceholder.typicode.com/posts/:id", ({ params }) => {
    const id = params.id;
    return HttpResponse.json(
      {
        body: "Mocked Body for id: " + id,
      },
      { status: 200 }
    );
  })
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
