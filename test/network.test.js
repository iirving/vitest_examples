import { test, expect, vi } from "vitest";
import { getPostBodybyId } from "../src/network.js";

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
