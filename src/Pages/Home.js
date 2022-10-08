import React from "react";
import injectSheet from "react-jss";
import HomeBannerImage from "../assets/img/home-banner.jpg";
import CompanyIntroImage from "../assets/img/electricmotor2.png";
import AlMotor1 from "../assets/img/am1.jpg";
import AlMotor2 from "../assets/img/am2.png";
import AlMotor3 from "../assets/img/am3.png";
import CenterLayout from "../components/CenterLayout";

const styles = {
    container: {
        display: "block",
    },
    bannerImage: {
        backgroundImage: `url(${HomeBannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "0 -90px",
        backgroundRepeat: "no-repeat",
        height: 650,
        position: "relative",
        "&:after": {
            content: '""',
            background: "#ffffff",
            position: "absolute",
            bottom: -61,
            width: "130%",
            height: 100,
            opacity: 1,
            transform: "rotate(-2.3deg)",
        },
    },
    bannerTextContainer: {
        position: "relative",
        textAlign: "left",
        background: "rgb(0 0 0 / 75%)",
        color: "#FFF !important",
        padding: "20px 60px",
        zIndex: 0,
        height: "100%",
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& h4": {
            fontWeight: 500,
            fontSize: 24,
            margin: "12px 0",
        },
        "& h1": {
            fontSize: 55,
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.2,
        }
    },
    companyIntro: {
        padding: "40px 0 20px 0",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 36,
        background: "#d7effd",
        "&:before": {
            content: '""',
            width: "100%",
            background: "#d7effd",
            transform: "rotate(74deg)",
            right: -710,
            height: "150vh",
            zIndex: -1,
            opacity: 1,
            position: "absolute",
            top: 0,
        },
        "& .image": {
            position: "relative",
            display: "inline-block",
            paddingLeft: 25,
            "& img": {
                width: 610,
                borderRadius: 4,
            },
            "& .isoInfo": {
                display: "none",
                textAlign: "left",
                padding: "10px 30px",
                opacity: 1,
                position: "absolute",
                zIndex: 333,
                fontSize: 16,
                background: "#F4F9FC",
                color: "#308A2C",
                left: 12,
                transform: "inherit",
                fontWeight: 500,
                top: "50%",
                marginTop: -22,
                boxShadow: "-2px 2px 2px 0 hsl(0deg 0% 0% / 20%)",
            }
        },
        "& .content": {
            position: "relative",
            display: "inline-block",
            "& h2": {
                fontSize: 36,
                margin: 0,
                position: "relative",
                fontFamily: "Poppins-Bold",
            },
            "& p": {
                fontSize: 18,
                margin: "8px 0",
                lineHeight: 1.4,
            }
        }
    },
    motorSlider: {
        padding: "80px 0 80px 20px",
        display: "block",
        position: "relative",
        "& .section-title": {
            display: "block",
            "& h1": {
                fontSize: 32,
                margin: 0,
                position: "relative",
                fontFamily: "Poppins-Bold",
            },
            "& h4": {
                fontSize: 18,
                fontWeight: 400,
                margin: 0,
            },
            "& p": {
                marginTop: 10,
                lineHeight: 1.4,
                display: "block",
                fontSize: 14,
            },
        }
    },
    imagesContainer: {
        display: "flex",
        alignItems: "center",
        padding: "10px 0",
        gap: 25,
    },
    imageWrapper: {
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 4px 10px #00000024",
        background: "#FFF",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        "& .image": {
            width: "80%",
        },
        "& .title": {
            padding: 20,
            textAlign: "center",
            width: "100%",
            borderRadius: "0 0 4px 4px",
            fontFamily: "Poppins-Medium",
            fontSize: 18,
        },
    }
}

const Home = ({ classes }) => {
    return <div className={classes.container}>
        <section className={classes.bannerImage}>
            <div className={classes.bannerTextContainer}>
                <CenterLayout>
                    <h4 className="text-white">Welcome to Silesia Electric Motors</h4>
                    <h1 className="text-white">Leading Electric Motor Manufacturer</h1>
                </CenterLayout>
            </div>
        </section>

        <CenterLayout>
            <section className={classes.companyIntro}>
                <div className="image">
                    <img src={CompanyIntroImage} alt="Electric Motor" />
                    <span className="isoInfo">ISO 9001:2015 &amp; CE Certified Company</span>
                </div>
                <div className="content">
                    <h2>Silesia Electric Motors</h2>
                    <p>An ISO 9001:2015 Quality &amp; CE certified company, is the leading Electric Motor Manufacturer located in Dubai, known for the best quality since its establishment. All these years we have been working constantly striving for improvement that have driven Silesia Electric motors to attain and achieve a leading position around the world Motor industry. The company is specialized is low tension (LT) motors:</p>
                </div>
            </section>
        </CenterLayout>

        <CenterLayout>
            <section className={classes.motorSlider}>
                <div className="section-title">
                    <div className="section-top">
                        <h1><b>Aluminum Electric Motors</b></h1>
                        <h4>IE1, IE2, IE3 motors</h4>
                    </div>
                    <div className="section-bottom">
                        <div className="">
                            <p>Motors power ranging 0.06Kw till 500Kw for both 50Hz and 60Hz<br />
                                Speed ranges 700rpm, 900rpm,1400rpm and 2800 rpm.</p>
                        </div>
                    </div>
                </div>
                <div className={classes.imagesContainer}>
                    <div className={classes.imageWrapper}>
                        <img className="image" src={AlMotor1} alt="Aluminium Motor 1" />
                        <div className="title">Aluminium Motor 1</div>
                    </div>
                    <div className={classes.imageWrapper}>
                        <img className="image" src={AlMotor2} alt="Aluminium Motor 2" />
                        <div className="title" >Aluminium Motor 2</div>
                    </div>
                    <div className={classes.imageWrapper}>
                        <img className="image" src={AlMotor3} alt="Aluminium Motor 3" />
                        <div className="title" >Aluminium Motor 3</div>
                    </div>
                </div>
            </section>
        </CenterLayout>
    </div>;
}

export default injectSheet(styles)(Home);