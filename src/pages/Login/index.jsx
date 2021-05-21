import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import GithubIcon from "mdi-react/GithubIcon";
import { AuthContext } from "../../context";

import { Wrapper } from "./styles";

export default function Login() {
  const { state, changeState } = useContext(AuthContext);

  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  const { client_id, redirect_uri } = state;
  const isLogged = sessionStorage.getItem("isLoggedIn");

  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setData({ ...data, isLoading: true });

      const requestData = {
        code: newUrl[1],
      };

      const proxy_url = state.proxy_url;
      console.log(requestData);

      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          changeState({ user: data, isLoggedIn: true });
          setData({ ...data, isLoading: false });
          sessionStorage.setItem("authorization", data.authorization);
          sessionStorage.setItem("isLoggedIn", true);
        })
        .catch((error) => {
          console.error(error);
          setData({ ...data, isLoading: false });
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed",
          });
        });
    }
  }, [state, data]);

  if (isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <Wrapper>
      <section className="container">
        <div>
          <h1>Welcome</h1>
          <span>Super amazing app</span>
          <span>{data.errorMessage}</span>
          <div className="login-container">
            {data.isLoading ? (
              <div className="loader-container">
                <div className="loader"></div>
              </div>
            ) : (
              <>
                {
                  // Link to request GitHub access
                }
                <a
                  className="login-link"
                  href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                  onClick={() => {
                    setData({ ...data, errorMessage: "" });
                  }}
                >
                  <GithubIcon />
                  <span>Login with GitHub</span>
                </a>
              </>
            )}
          </div>
          <button onClick={() => console.log(state)}>teste</button>
        </div>
      </section>
    </Wrapper>
  );
}