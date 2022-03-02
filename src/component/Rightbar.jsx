import * as React from 'react';
import { Avatar, Box, Divider, ImageList, ImageListItem, Link, Typography } from "@material-ui/core";
import AvatarGroup from '@mui/material/AvatarGroup';




const Rightbar = () => {
  const style = {
    position: 'sticky',
    top: 70,
  };
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
  ];
  return <Box sx={style}>
    <Typography variant='subtitle1'> Online friends</Typography>
    <Box sx={{ display: "flex", pb: 4 }}>
      <AvatarGroup max={5}>
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
        <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/6.jpg" />
        <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/7.jpg" />
      </AvatarGroup>
    </Box>
    <Box sx={{ pb: 4 }}>
      <Typography variant='subtitle1'> Gallery</Typography>

      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={100}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    <Typography variant='Subtitle1'> Category</Typography>
    <Box sx={{ mr: 2 }}>
      <Link href="#" variant='body1' color='gray' >Sports</Link>
      <Link href="#" variant='body1' color='gray'>Food</Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href="#" variant='body1' color='gray'>Education</Link>
      <Link href="#" variant='body1' color='gray'>Movies</Link>
    </Box>
  </Box>
};

export default Rightbar;
