import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthContext } from "./context";

import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const { state, changeState } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
