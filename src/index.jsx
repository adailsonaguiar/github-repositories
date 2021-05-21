import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import Provider from "./context";
import GlobalStyles from "./styles/global";
import App from "./App";
import theme from "./styles/theme";

ReactDOM.render(
  <Provider>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      <GlobalStyles />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
