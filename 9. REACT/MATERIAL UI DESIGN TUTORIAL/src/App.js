import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Tutorial from "./Components/Tutorial";
import { theme } from "./Components/theme";
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Tutorial />
      </ThemeProvider>
    </>
  );
};

export default App;
