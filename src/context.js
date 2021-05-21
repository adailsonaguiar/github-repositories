import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  client_secret: process.env.REACT_APP_CLIENT_SECRET,
  proxy_url: process.env.REACT_APP_PROXY_URL,
};

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [repositories, setRepositories] = useState([]);

  function changeState(index) {
    setState({ ...state, ...index });
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        changeState,
        repositories,
        setRepositories,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AppProvider;
