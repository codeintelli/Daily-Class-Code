import { Button, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import CodeIcon from "@material-ui/icons/Code";
import { PhotoCamera } from "@material-ui/icons";
// * material ui is depends on Styled components
import { theme } from "./theme";
const useStyle = makeStyles({
  btn: {
    margin: 20,
    backgroundColor: "#34495e",
    "& > *": {
      margin: 20,
    },
  },
  input: {
    display: "none",
  },
  cbtn: {
    ...theme.palette.mybtn,
  },
});

const Tutorial = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.btn}>
        <Button>Click Me</Button>
        <Button variant="contained">Click Me</Button>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
        <Button variant="contained" color="secondary">
          Click Me
        </Button>
        <Button variant="outlined" color="secondary">
          Click Me Outlined
        </Button>
        <Button variant="contained" color="primary" href="https://github.com/">
          Link Click Me
        </Button>
        <CodeIcon />
        <Button
          variant="contained"
          color="primary"
          startIcon={<CodeIcon />}
          href="https://github.com/"
        >
          Github
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<CodeIcon />}
          href="https://github.com/"
        >
          Github
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            alert("you have clicked this button");
          }}
          endIcon={<CodeIcon />}
          href="https://github.com/"
        >
          Github
        </Button>
        {/* input upload */}
        <input
          accept="image/*"
          id="contained-button-file"
          className={classes.input}
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <IconButton color="secondary" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </div>

      <Button variant="contained" className={classes.cbtn}>
        Custom Buttons
      </Button>
    </>
  );
};

export default Tutorial;
