import { useEffect, useState } from "react";

import { apiPost } from "../../api/request";
import ListRepositories from "../../components/ListRepositories";

import * as S from "./styles";
import { useParams } from "react-router";
import Heading from "../../components/Heading";

export default function Repositories() {
  const authorization = sessionStorage.getItem("authorization");
  let { login } = useParams();
  const [repositories, setRepositories] = useState([]);
  const typeTabs = { REPOSITORIES: "REPOSITORIES", STARRED: "STARRED" };
  const [tabActive, setTabActive] = useState(typeTabs.REPOSITORIES);

  async function getRepositories() {
    const response = await apiPost({
      endpoint: `users/${login}/repos`,
      headers: {
        Authorization: `token ${authorization}`,
      },
    });

    if (response?.length) setRepositories(response);
  }

  async function getRepositoriesMostVisited() {
    const response = await apiPost({
      endpoint: `users/${login}/starred`,
      headers: {
        Authorization: `token ${authorization}`,
      },
    });

    if (response?.length) setRepositories(response);
  }

  useEffect(() => {
    if (login) {
      if (tabActive === typeTabs.REPOSITORIES) getRepositories();
      if (tabActive === typeTabs.STARRED) getRepositoriesMostVisited();
    }
  }, [login]);

  function getRepositoriesSwitch(type) {
    setTabActive(type);
    switch (type) {
      case typeTabs.REPOSITORIES:
        getRepositories();
        break;

      case typeTabs.STARRED:
        getRepositoriesMostVisited();
        break;

      default:
        getRepositories();
        break;
    }
  }

  return (
    <S.Section>
      <Heading>
        Repositories of <strong>{login}</strong>
      </Heading>
      <S.Tab>
        <S.TabItem
          active={tabActive === typeTabs.REPOSITORIES}
          onClick={() => {
            if (tabActive !== typeTabs.REPOSITORIES)
              getRepositoriesSwitch(typeTabs.REPOSITORIES);
          }}
        >
          Repositories
        </S.TabItem>
        <S.TabItem
          active={tabActive === typeTabs.STARRED}
          onClick={() => {
            if (tabActive !== typeTabs.STARRED)
              getRepositoriesSwitch(typeTabs.STARRED);
          }}
        >
          Starred
        </S.TabItem>
      </S.Tab>
      <ListRepositories repositories={repositories} />
    </S.Section>
  );
}
