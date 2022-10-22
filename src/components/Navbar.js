import React, { useEffect, useState } from "react";
import CenterLayout from "../components/CenterLayout";
import Logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
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
            background: "#25d95c",
            borderRadius: 4,
        }
    },
    navWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 32,
        "&.scrolled a": {
            color: "#8d939d",
        },
        "&.scrolled a.active": {
            color: "#333",
        },
        "& a": {
            textTransform: "capitalize",
            position: "relative",
            display: "block",
            padding: "30px 0",
            color: "#b0b1c3",
            fontFamily: "Poppins-Medium",
            textDecoration: "none",
            fontSize: 18,
            transition: "color .3s",
            "&.active": {
                color: "#FFF",
            },
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
                    <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                    <NavLink to={`/product/${PRODUCTS.sem_112_m_b3_4p.id}`} className={({ isActive }) => (isActive ? "active" : "")}>Products</NavLink>
                    {/* <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink> */}
                </div>
            </div>
        </CenterLayout>
    </div>;
}

export default injectSheet(styles)(Navbar);