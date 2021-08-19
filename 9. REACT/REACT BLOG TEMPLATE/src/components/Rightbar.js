import React from "react";
import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: { fontSize: 16, fontWeight: "bold", color: "#555" },
  link: { fontSize: 16, marginRight: theme.spacing(2), color: "#555" },
}));
const Rightbar = () => {
  const classes = useStyle();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://material-ui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://material-ui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallary
      </Typography>
      <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={3}>
        {arr.map((data, index) => {
          return (
            <ImageListItem>
              <img
                src={`https://source.unsplash.com/user/erondu/500x50${index}`}
                alt={`data${index}`}
              />
            </ImageListItem>
          );
        })}
      </ImageList>

      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sports
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Fashion
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href="#" className={classes.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Technology
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
    </Container>
  );
};

export default Rightbar;
