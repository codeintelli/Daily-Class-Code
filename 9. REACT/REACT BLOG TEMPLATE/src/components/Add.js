import React from "react";
import {
  Fab,
  makeStyles,
  Tooltip,
  Container,
  TextField,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  FormLabel,
  FormControl,
  Snackbar,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import AddIcon from "@material-ui/icons/Add";
// import { Alert } from "@material-ui/lab";
import MuiAlert from "@material-ui/lab/Alert";
const useStyle = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    borderRadius: 10,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(3),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  absolute: {
    position: "fixed",
    bottom: 10,
    right: 20,
  },
}));
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Add = () => {
  const [open, setOpen] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  // const handleClick = () => {};
  const handleClick = () => {
    setOpen(false);
    setOpenSnackbar(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };
  const classes = useStyle();
  return (
    <>
      <Tooltip title="Add" aria-label="add">
        <Fab
          color="secondary"
          onClick={() => {
            setOpen(true);
          }}
          className={classes.absolute}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form}>
            <div className={classes.item}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                size="small"
                placeholder="Your Name"
                style={{ width: "100%" }}
              />
            </div>

            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                placeholder="Tell Your Story"
                style={{ width: "100%" }}
                variant="outlined"
              />
            </div>
            <div className={classes.item}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className={classes.item}>
              <Button
                varient="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={handleClick}
              >
                Create
              </Button>
              <Button
                varient="outlined"
                color="secondary"
                style={{ marginRight: 20 }}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
