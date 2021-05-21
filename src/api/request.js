const BASE_URL = "https://api.github.com/";

export async function apiPost({ endpoint, headers, data }) {
  return fetch(`${BASE_URL}${endpoint}`, {
    headers: headers,
    body: data,
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
}
