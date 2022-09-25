import React from "react";
import CenterLayout from "../components/CenterLayout";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import injectSheet from "react-jss";

const styles = {
    navBarStyle: {
        display: "block",
        background: "#FFF",
        boxShadow: "0 3px 12px 0 rgb(0 0 0 / 10%)",
    },
    innerWrapper: {
        minHeight: 85,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& img.logo": {
            width: 150,
        }
    },
    navWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 32,
    },
    navLink: {
        textTransform: "capitalize",
        position: "relative",
        display: "block",
        padding: "30px 0",
        color: "#2e2d2d",
        fontFamily: "Poppins-Medium",
        textDecoration: "none",
        fontSize: 18,
    }
}

const Navbar = ({ classes }) => {
    return <div className={classes.navBarStyle}>
        <CenterLayout>
            <div className={classes.innerWrapper}>
                <img src={Logo} alt="App Logo" className="logo" />
                <div className={classes.navWrapper}>
                    <Link to="/home" className={classes.navLink}>Home</Link>
                    <Link to="/home" className={classes.navLink}>About Us</Link>
                    <Link to="/home" className={classes.navLink}>Products</Link>
                    <Link to="/home" className={classes.navLink}>Contact Us</Link>
                </div>
            </div>
        </CenterLayout>
    </div>;
}

export default injectSheet(styles)(Navbar);