import { createTheme } from "@material-ui/core";

import { deepOrange, purple } from "@material-ui/core/colors";
export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: deepOrange[500],
    },
    mybtn: {
      backgroundColor: purple[300],
      color: "black",
      border: "2px solid black",
    },
  },
});
