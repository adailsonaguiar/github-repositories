import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthContext } from "./context";

import Login from "./pages/Login";
import { apiPost } from "./api/request";
import { AuthenticatePages } from "./pages/AuthenticatePages";

function App() {
  const { changeState } = useContext(AuthContext);

  async function loginWithToken() {
    const authorization = sessionStorage.getItem("authorization");
    if (authorization) {
      const userData = await apiPost({
        endpoint: "user",
        headers: {
          Authorization: `token ${authorization}`,
        },
      });

      if (userData) {
        changeState({ user: userData, isLoggedIn: true });
        sessionStorage.setItem("isLoggedIn", true);
      } else {
        sessionStorage.setItem("isLoggedIn", false);
        sessionStorage.setItem("authorization", null);
      }
    }
  }
  useEffect(() => {
    loginWithToken();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={AuthenticatePages} />
      </Switch>
    </Router>
  );
}

export default App;
