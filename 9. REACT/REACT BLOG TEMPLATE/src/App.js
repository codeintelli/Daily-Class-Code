import React from "react";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import Add from "./components/Add";
import { Grid, makeStyles } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const App = () => {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>

      <Add />
    </>
  );
};

export default App;
