import React from 'react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';



const Post = () => {
    return (
        <>
            <Box mb={7}>
                <Card>
                    <CardActionArea>
                        <CardMedia component="img"
                            height="250"
                            image='https://mui.com/static/images/cards/paella.jpg'
                            title="my post" />
                        <CardContent>
                            <Typography gutterBottom variant="h5">My First Post </Typography>
                            <Typography variant="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas velit augue, sed egestas leo volutpat ac. Pellentesque tristique augue eu pellentesque pharetra. In sit amet pulvinar quam. Aenean non dui imperdiet, ultricies urna ut, aliquam risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer cursus varius sem finibus egestas. Mauris scelerisque enim ac magna ultrices lacinia.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas velit augue, sed egestas leo volutpat ac. Pellentesque tristique augue eu pellentesque pharetra. In sit amet pulvinar quam. Aenean non dui imperdiet, ultricies urna ut, aliquam risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer cursus varius sem finibus egestas. Mauris scelerisque enim ac magna ultrices lacinia. </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size='small' color="primary">Share</Button>
                        <Button size='small' color="primary">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
};

export default Post;
