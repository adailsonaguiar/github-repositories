import { useCallback, useContext, useEffect, useState } from "react";
import debounce from "lodash.debounce";

import { apiPost } from "../../api/request";
import { AuthContext } from "../../context";
import InputSearch from "../../components/InputSearch";
import ListRepositories from "../../components/ListRepositories";

import * as S from "./styles";
import Users from "../../components/Users";

export default function Home() {
  const { state, changeState } = useContext(AuthContext);
  const authorization = sessionStorage.getItem("authorization");
  const [userQuery, setUserQuery] = useState("");

  async function getRepositories() {
    const response = await apiPost({
      endpoint: `users/${userQuery}`,
      headers: {
        Authorization: `token ${authorization}`,
      },
    });
    if (response?.login) changeState({ userSearch: response });
    console.log(response);
  }

  const delayedQuery = useCallback(debounce(getRepositories, 500), [userQuery]);

  useEffect(() => {
    delayedQuery();

    return delayedQuery.cancel;
  }, [userQuery, delayedQuery]);

  const onChange = (e) => {
    setUserQuery(e.target.value);
  };

  return (
    <S.Section>
      <InputSearch
        placeholder="Search for an user"
        onChange={onChange}
        value={userQuery}
      />
      {state?.userSearch && <Users user={state?.userSearch} />}
    </S.Section>
  );
}
