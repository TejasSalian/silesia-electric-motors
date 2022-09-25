import React from "react";
import CenterLayout from "../components/CenterLayout";
import injectSheet from "react-jss";

const styles = {
    footerStyle: {
        display: "block",
        minHeight: 300,
        background: "#dfdfdf",
        position: "relative",
        "&:before": {
            content: '""',
            background: "#ffffff",
            position: "absolute",
            top: 0,
            width: "100%",
            height: 20,
            opacity: 1,
        }
    },
}

const Footer = ({ classes }) => {
    return <div className={classes.footerStyle}><CenterLayout></CenterLayout></div>;
}

export default injectSheet(styles)(Footer);