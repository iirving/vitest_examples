import { test, expect, vi } from "vitest";
import { getPostBodybyId } from "../src/network.js";

vi.stubGlobal("fetch", async (url) => {
  return {
    json: async () => {
      return {
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        userId: 1,
      };
    },
  };
});

test("greeting", async () => {
  const result = await getPostBodybyId(1);

  expect(result).toMatchInlineSnapshot(`
    {
      "body": "quia et suscipit
    suscipit recusandae consequuntur expedita et cum
    reprehenderit molestiae ut ut quas totam
    nostrum rerum est autem sunt rem eveniet architecto",
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "userId": 1,
    }
  `);
});
