import { apiPost } from "./request";

const authorization = sessionStorage.getItem("authorization");

export async function getRepositories(username) {
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
  const response = await apiPost({
    endpoint: `users/${login}/starred`,
    headers: {
      Authorization: `token ${authorization}`,
    },
  });

  if (response?.length) return response;
  return null;
}
