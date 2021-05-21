import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";

import theme from "../styles/theme";
import Provider from "../context";
import GlobalStyles from "../styles/global";

export const renderWithTheme = (children) =>
  render(
    <Provider>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
