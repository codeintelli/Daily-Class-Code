import React from "react";
import {
  alpha,
  Avatar,
  Badge,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import CancelIcon from "@material-ui/icons/Cancel";
const useStyle = makeStyles((theme) => ({
  logolg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logosm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    width: "50%",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "50%",
    },
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyle({ open });
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.Toolbar}>
          <Typography variant="h6" component="span" className={classes.logolg}>
            Blog Menia
          </Typography>
          <Typography variant="h6" component="span" className={classes.logosm}>
            BMenia
          </Typography>
          <div className={classes.search}>
            <Search />
            <InputBase
              placeholder="search your blog here..."
              className={classes.input}
            />
            <CancelIcon
              className={classes.cancel}
              onClick={() => {
                setOpen(false);
              }}
            />
          </div>
          <div className={classes.icons}>
            <Search
              className={classes.searchButton}
              onClick={() => {
                setOpen(true);
              }}
            />
            <IconButton aria-label="show 17 notification" color="inherit">
              <Badge
                badgeContent={17}
                color="secondary"
                className={classes.badge}
              >
                <MailOutlineIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 notification" color="inherit">
              <Badge
                badgeContent={17}
                color="secondary"
                className={classes.badge}
              >
                <NotificationsActiveIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="show 17 notification"
              color="inherit"
            >
              <Badge color="error">
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
