import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";
const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));
const Feed = () => {
  const classes = useStyle();
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const url = `https://source.unsplash.com/user/erondu/500x500`;
  // const arr = [1, 2];
  return (
    <Container className={classes.container}>
      {arr.map((post, index) => {
        return <Post random={index} />;
      })}
    </Container>
  );
};

export default Feed;
