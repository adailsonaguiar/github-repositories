import { useCallback, useContext, useEffect, useState } from "react";
import debounce from "lodash.debounce";

import { apiPost } from "../../api/request";
import { AuthContext } from "../../context";
import InputSearch from "../../components/InputSearch";
import ListRepositories from "../../components/ListRepositories";

import * as S from "./styles";
import { useParams } from "react-router";

export default function Repositories() {
  const authorization = sessionStorage.getItem("authorization");
  let { login } = useParams();
  const [userQuery, setUserQuery] = useState(login);
  const [repositories, setRepositories] = useState([]);

  async function getRepositories() {
    const response = await apiPost({
      endpoint: `users/${userQuery}/repos`,
      headers: {
        Authorization: `token ${authorization}`,
      },
    });

    if (response?.length) setRepositories(response);
  }

  const delayedQuery = useCallback(debounce(getRepositories, 500), [userQuery]);

  useEffect(() => {
    if (userQuery) delayedQuery();
  }, []);

  useEffect(() => {
    if (userQuery) delayedQuery();

    return delayedQuery.cancel;
  }, [userQuery, delayedQuery]);

  const onChange = (e) => {
    setUserQuery(e.target.value);
  };

  return (
    <S.Section>
      <InputSearch
        placeholder="Search for a repository"
        onChange={onChange}
        value={userQuery}
      />
      <ListRepositories repositories={repositories} />
    </S.Section>
  );
}
