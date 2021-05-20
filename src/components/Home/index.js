import { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../../context";

export default function Home() {
  const { state } = useContext(AuthContext);

  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return <h1>Home</h1>;
}
