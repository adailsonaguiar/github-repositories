import { useEffect, useState } from "react";

import ListRepositories from "../../components/ListRepositories";

import * as S from "./styles";
import { useParams } from "react-router";
import Heading from "../../components/Heading";
import {
  getRepositories,
  getRepositoriesMostVisited,
} from "../../api/repositories";

export default function Repositories() {
  let { login } = useParams();
  const [repositories, setRepositories] = useState([]);
  const typeTabs = { REPOSITORIES: "REPOSITORIES", STARRED: "STARRED" };
  const [tabActive, setTabActive] = useState(typeTabs.REPOSITORIES);

  async function requestRepositories(typeTab) {
    if (typeTab === typeTabs.REPOSITORIES) {
      const repositoriesResponse = await getRepositories(login);
      if (repositoriesResponse) setRepositories(repositoriesResponse);
    }
    if (typeTab === typeTabs.STARRED) {
      const repositoriesResponse = await getRepositoriesMostVisited(login);
      if (repositoriesResponse) setRepositories(repositoriesResponse);
    }
  }

  useEffect(() => {
    if (login) {
      requestRepositories(tabActive);
    }
  }, [login]);

  function getRepositoriesSwitch(type) {
    setTabActive(type);
    requestRepositories(type);
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
