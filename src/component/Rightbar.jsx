import { Container, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(5),
  },
  item: {
    display: "flex",
    alignItems: "center",

  },
}));


const Rightbar = () => {
  const classes = useStyles();
  return <Container className={classes.container}>
    right bar
  </Container>
};

export default Rightbar;
