import React, { useEffect, useState } from "react";
import CenterLayout from "../components/CenterLayout";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import injectSheet from "react-jss";
import useScrollPosition from "../hooks/useScrollPosition";
import { PRODUCTS } from "../utils/products";

const styles = {
    navBarStyle: {
        width: "100%",
        display: "block",
        background: "transparent",
        position: "fixed",
        zIndex: 9999,
        transition: "background .3s",
        "&.scrolled": {
            background: "#FFF",
            boxShadow: "0 3px 12px 0 rgb(0 0 0 / 33%)",
        }
    },
    innerWrapper: {
        minHeight: 85,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& img.logo": {
            width: 150,
            background: "#FFF",
            borderRadius: 25,
        }
    },
    navWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 32,
        "&.scrolled .navLink": {
            color: "#333",
        },
        "& .navLink": {
            textTransform: "capitalize",
            position: "relative",
            display: "block",
            padding: "30px 0",
            color: "#FFFFFF",
            fontFamily: "Poppins-Medium",
            textDecoration: "none",
            fontSize: 18,
            transition: "color .3s",
        },
    },
}

const Navbar = ({ classes }) => {
    const [scrolled, setScrolled] = useState(false);
    const scrollPosition = useScrollPosition();

    useEffect(() => {
        if (scrollPosition > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }, [scrollPosition]);

    return <div className={`${classes.navBarStyle} ${scrolled ? "scrolled" : ""}`}>
        <CenterLayout>
            <div className={classes.innerWrapper}>
                <img src={Logo} alt="App Logo" className="logo" />
                <div className={`${classes.navWrapper} ${scrolled ? "scrolled" : ""}`}>
                    <Link to="/home" className={"navLink"}>Home</Link>
                    <Link to={`/product/${PRODUCTS.sem_112_m_b3_4p.id}`} className={"navLink"}>Products</Link>
                    <Link to="/home" className={"navLink"}>Contact Us</Link>
                </div>
            </div>
        </CenterLayout>
    </div>;
}

export default injectSheet(styles)(Navbar);