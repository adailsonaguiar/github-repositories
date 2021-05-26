import { apiPost } from "./request";

export async function getRepositories(username) {
  const authorization = sessionStorage.getItem("authorization");
  const response = await apiPost({
    endpoint: `users/${username}/repos`,
    headers: {
      Authorization: `token ${authorization}`,
    },
  });
  if (response?.length) return response;
  return [];
}

export async function getRepositoriesMostVisited(login) {
  const authorization = sessionStorage.getItem("authorization");

  const response = await apiPost({
    endpoint: `users/${login}/starred`,
    headers: {
      Authorization: `token ${authorization}`,
    },
  });

  if (response?.length) return response;
  return null;
}
