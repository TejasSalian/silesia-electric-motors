import React from "react";
import CenterLayout from "../components/CenterLayout";
import injectSheet from "react-jss";
import Logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const styles = {
    footerStyle: {
        display: "block",
        minHeight: 300,
        background: "#e4f5ff",
        position: "relative",
        padding: "50px 0 80px 0",
        borderTop: "4px solid #b2e1ed",
    },
    footerWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0 200px",
    },
    companyInfo: {
        display: "flex",
        flexDirection: "column",
        width: 250,
        gap: 12,
        "& img.logo": {
            width: 120,
            borderRadius: 4,
            border: "1px solid #62915f",
        },
        "& .info": {
            fontSize: 14,
            lineHeight: 1.5,
            color: "#000000",
        }
    },
    contactInfo: {
        display: "flex",
        flexDirection: "column",
        width: 200,
        gap: 8,
        color: "#000000",
        "& .title": {
            fontWeight: 700,
            fontSize: 20,
            marginBottom: 10,
            color: "#62915f",
        },
        "& .companyName": {
            fontWeight: 700,
            fontSize: 14,
        },
        "& .address": {
            fontSize: 14,
        },
        "& .contact": {
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: 14,
        },
        "& .contactIcon": {
            color: "#000000",
            position: "relative",
            top: 1,
        },
    },
}

const Footer = ({ classes }) => {
    return <div className={classes.footerStyle}>
        <CenterLayout>
            <div className={classes.footerWrapper}>
                <div className={classes.companyInfo}>
                    <img src={Logo} alt="App Logo" className="logo" />
                    <span>SILESIA Electric Motors, a CE certified company is one of the leading Electric Motor Distrubutor based in Wrocław, Poland.</span>
                </div>
                <div className={classes.contactInfo}>
                    <span className="title">Contact</span>
                    <span className="companyName">SILESIA ELECTRIC MOTORS</span>
                    <span className="address">Sp.z.o.o. Legnicka, Wrocław 54-206, Poland.</span>
                    <span className="contact">
                        <FontAwesomeIcon icon={faEnvelope} className={"contactIcon"} />
                        info@silesiaelectricmotors.com
                    </span>
                </div>
            </div>
        </CenterLayout></div>;
}

export default injectSheet(styles)(Footer);