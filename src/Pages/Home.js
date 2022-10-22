import React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
import HomeBannerImage from "../assets/img/home-banner.jpg";
import CompanyIntroImage from "../assets/img/electricmotor2.png";
import AlMotor1 from "../assets/img/am1.jpg";
import AlMotor1Spec from "../assets/img/sem_112_m_b3_4p.PNG";
import CenterLayout from "../components/CenterLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { PRODUCTS } from "../utils/products";


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
        flexDirection: "row",
        boxShadow: "-2px 2px 7px #00000024",
        background: "#FFF",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        padding: "25px 25px 45px 25px ",
        cursor: "pointer",
        border: "1px solid transparent",
        transition: "border-color .3s",
        position: "relative",
        "&:hover": {
            borderColor: "#315ed7ee",
            "& .linkIcon": {
                opacity: 1,
            },
        },
        "& .image": {
            width: "320px",
        },
        "& .specImage": {
            width: "550px",
        },
        "& .linkIcon": {
            color: "#6060f9",
            fontSize: 30,
            opacity: 0,
            position: "absolute",
            right: 20,
            transition: "opacity .3s",
        },
        "& .title": {
            padding: 20,
            textAlign: "center",
            width: "100%",
            borderRadius: "0 0 4px 4px",
            fontFamily: "Poppins-Medium",
            fontSize: 18,
            position: "absolute",
            bottom: 0,
            color: "#333",
        },
    }
}

const Home = ({ classes }) => {
    return <div className={classes.container}>
        <section className={classes.bannerImage}>
            <div className={classes.bannerTextContainer}>
                <CenterLayout>
                    <h4 className="text-white">Welcome to Silesia Electric Motors</h4>
                    <h1 className="text-white">Electric Motor Distrubutor</h1>
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
                        <h4>IE2 motor</h4>
                    </div>
                    <div className="section-bottom">
                        <div className="">
                            <p>Three Phase Electric Motors- Aluminum Frame Motors - Power 4Kw for 50Hz<br />
                                Speed 1445rpm</p>
                        </div>
                    </div>
                </div>
                <div className={classes.imagesContainer}>
                    <Link to={`/product/${PRODUCTS.sem_112_m_b3_4p.id}`}>
                        <div className={classes.imageWrapper}>
                            <img className="image" src={AlMotor1} alt="Aluminium Motor 1" />
                            <img className="specImage" src={AlMotor1Spec} alt="Aluminium Motor 12 Spec" />
                            <FontAwesomeIcon icon={faChevronRight} className={"linkIcon"} />
                            <div className="title">Three Phase Electric Motors- Aluminum Frame - SEM 112 M_B3_4P</div>
                        </div>
                    </Link>
                </div>
            </section>
        </CenterLayout>
    </div>;
}

export default injectSheet(styles)(Home);