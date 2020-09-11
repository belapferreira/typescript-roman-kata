import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistedState";

import AppProvider from "./hooks";
import { BrowserRouter as Router } from "react-router-dom";

import ThemeSwitcher from "./components/ThemeSwitcher";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = (): void => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <ThemeSwitcher toggleTheme={toggleTheme} />
          <Routes />
        </Router>
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
