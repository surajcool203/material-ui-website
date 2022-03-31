import { AppBar, Avatar, Badge, Toolbar, Typography } from "@mui/material";
import { alpha, InputBase, makeStyles } from "@material-ui/core";
import { Cancel, DoorbellRounded, Search } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";
import { useState } from "react";



const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "relative",
        justifyContent: "space-between",
        padding: theme.spacing(0, 0, 0, 0),


    },
    logoLg: {
        display: 'none',
        [theme.breakpoints.up("sm")]: {
            display: 'block',
        },
    },
    logoSm: {
        display: 'block',
        [theme.breakpoints.up("sm")]: {
            display: 'none',
        },
    },

    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: (props) => props.open ? "flex" : "none",
        },
    },


    input: {
        color: "white",
        marginLeft: theme.spacing(1),
    },
    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },

    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },

    icons: {
        alignItems: 'center',
        display: (props) => (props.open ? 'none' : 'flex'),
    },
    badge: {
        marginRight: theme.spacing(2),

    },
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    return <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>
                Developer
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
                DEV
            </Typography>
            <div className={classes.search}>
                <Search />
                <InputBase placeholder="Search..." className={classes.input} />
            </div>
            <div className={classes.icons}>
                <Badge badgeContent={4} color="secondary" className={classes.badge}>
                    <Mail color="action" />
                </Badge>
                <Badge badgeContent={3} color="secondary" className={classes.badge}>
                    <DoorbellRounded color="action" />
                </Badge>
                <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
            </div>
        </Toolbar>
    </AppBar>
};

export default Navbar;
