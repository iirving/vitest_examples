export async function getPostBodybyId(id) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

  return data.body;
}
