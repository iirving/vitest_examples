/**
 * using msw version 1.3.2
 * to install npm i msw@1.3.2 -D
 * or switch to v^2 as of septemeber 2023
 */

import { beforeAll, afterEach, afterAll } from "vitest";
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
