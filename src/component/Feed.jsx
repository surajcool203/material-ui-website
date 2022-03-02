import { Container, makeStyles } from '@material-ui/core';
import Post from './Post';


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
  },
}));


const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

    </Container>
  );
};

export default Feed;
