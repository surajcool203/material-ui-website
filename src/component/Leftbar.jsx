import { Bookmark, ExitToApp, Home, List, Person, PhotoCamera, PlayCircleOutline, Settings, TabletMac } from "@mui/icons-material";
import { makeStyles } from '@material-ui/core';
import { Typography } from "@mui/material";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "90vh",
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(5),
    color: "white",
    position: "sticky",
    top: 65,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: 'white',
      color: 'black',
      border: '1px solid lightgray',
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "10px",
    },

  },
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

}));


const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Person</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>List</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>Play</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>Phone</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Bookmark</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Setting</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Exit</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
