export async function getPostBodybyId(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const body = await response.json();
  return body;
}
