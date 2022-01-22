import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(5),
    },
}));


const Post = () => {
    const classes = useStyles();
    return <>
        <Card>
            <CardActionArea>
                <CardMedia classes={className.media} image='https://unsplash.com/photos/aZjw7xI3QAA' titke="my post" />
                <CardContent>
                    <Typography varioant="h5">My First Post </Typography>
                    <Typography varioant="body">Lorem </Typography>
                </CardContent>
            </CardActionArea>
        </Card>;
    </>;
};

export default Post;
