import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import logo from "../assets/images/logo.svg";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1
        },
        toolbar: {
            "background-color": "#EF5350"
        },
        img: {
            width: "150px",
            height: "75px"
        },
        btn: {
            backgroundColor: "transparent",
            border: "none"
        }
    }),
);

const goHome = () => {

}

export default function ToolBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.toolbar} position="static" >
                <Toolbar variant="dense" >
                    <img className={classes.img} src={logo} alt="logo" />
                </Toolbar>
            </AppBar>
        </div>
    );
}
