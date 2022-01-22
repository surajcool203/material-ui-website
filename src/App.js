import React from 'react';
import Feed from './component/Feed';
import Leftbar from './component/Leftbar';
import Navbar from './component/Navbar';
import Rightbar from './component/Rightbar';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@mui/material';
import { ClassNames } from '@emotion/react';


const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));


const App = () => {
  const classes = useStyles();
  return <div>
    <Navbar />
    <Grid container>
      <Grid item sm={2} xs={2}>
        <Leftbar />
      </Grid>
      <Grid item sm={7} xs={10}>
        <Feed />
      </Grid>
      <Grid item sm={3} >
        <Rightbar />
      </Grid>
    </Grid>
  </div>
};

export default App;