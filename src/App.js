import React from 'react';
import Leftbar from './component/Leftbar';
import Navbar from './component/Navbar';
import Rightbar from './component/Rightbar';
import { Grid } from '@mui/material';
import Add from './component/Add';
import Feed from './component/Feed';




const App = () => {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} sx={{ display: { sm: "none", lg: "block " } }}>
          <Rightbar />
        </Grid>
        <Add />
      </Grid>
    </div>
  );
};

export default App;