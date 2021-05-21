import { Redirect, Route, Router, Switch } from "react-router";
import styled from "styled-components";
import MenuBar from "../components/MenuBar";

import Home from "./Home";
import Repositories from "./Repositories";

export const Wrapper = styled.main`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
`;

export function AuthenticatePages() {
  const isLogged = sessionStorage.getItem("isLoggedIn");

  if (!isLogged) {
    return <Redirect to="/login" />;
  }
  return (
    <Wrapper>
      <MenuBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/user/:login" component={Repositories} />
      </Switch>
    </Wrapper>
  );
}
