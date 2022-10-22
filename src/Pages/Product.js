import React from "react";
import injectSheet from "react-jss";
import CenterLayout from "../components/CenterLayout";
import HomeBannerImage from "../assets/img/electricmotor1.jpg";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../utils/products";
import AlMotor1Spec from "../assets/img/sem_112_m_b3_4p.PNG";

const styles = {
    container: {
        display: "block",
        paddingBottom: 100,
    },
    bannerImage: {
        backgroundImage: `url(${HomeBannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "0 -480px",
        backgroundRepeat: "no-repeat",
        height: 100,
        position: "relative",
        "&:after": {
            content: '""',
            background: "#000000a3",
            position: "absolute",
            top: 0,
            width: "100%",
            height: 100,
            opacity: 1,
        },
    },
    detailsContainer: {
        display: "block",
        marginTop: 75,
    },
    detailsWrapper: {
        minHeight: "70vh",
        border: "1px solid #c3bebe",
        borderRadius: 4,
        padding: "30px 20px 20px 20px",
        position: "relative",
        float: "left",
        "& .image": {
            margin: "auto",
        },
    },
    rightDetailsSection: {
        padding: "10px 15px",
        background: "#eaf8ff",
        borderRadius: 4,
        float: "left",
        marginTop: 45,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: -90,
        right: 19,
        border: "1px solid #333",
        "& .detailsCard": {
            display: "flex",
            flexDirection: "column",
            padding: "15px 15px",
            gap: 4,
            color: "#000",
            borderBottom: "1px dashed #cecfcf",
            "&:last-child": {
                borderBottom: 0,
            },
            "& .title": {
                fontWeight: 700,
                fontSize: 14,
                textTransform: "capitalize",
            },
            "& .value": {
                fontSize: 16,
            },
        },
    },
    bottomDetailsSection: {
        padding: "10px 15px",
        background: "#FFF",
        borderRadius: 4,
        float: "left",
        marginTop: 45,
        "& .detailsCard": {
            display: "flex",
            flexDirection: "column",
            padding: "15px 15px",
            gap: 6,
            color: "#000",
            borderBottom: "1px dashed #cecfcf",
            width: "calc(33% - 14px)",
            float: "left",
            margin: "0 8px",
            "&:last-child": {
                borderBottom: 0,
            },
            "& .title": {
                fontWeight: 700,
                fontSize: 14,
                textTransform: "capitalize",
            },
            "& .value": {
                fontSize: 16,
            },
        },
    },
};

const Product = ({ classes }) => {
    const { id } = useParams();
    const product = PRODUCTS[id];

    const detailList = Object.entries(product).map(([key, value]) => {
        return {
            title: key,
            value: value,
        }
    }).filter(d => {
        return typeof d.value === "string" && d.title !== "id";
    });

    const electricalData = Object.entries(product.electricalData).map(([key, value]) => {
        return {
            title: key,
            value: value,
        }
    });

    return <div className={classes.container}>
        <section className={classes.bannerImage} />
        <CenterLayout>
            <section className={classes.detailsContainer}>
                <h4>Three phase electric motor</h4>
                <h2>{product.type}</h2>
                <section className={classes.detailsWrapper}>
                    <img className="image" src={AlMotor1Spec} alt="Aluminium Motor 1" />
                    <div className={classes.bottomDetailsSection}>
                        {
                            detailList.map(detail => <div key={detail.title} className={"detailsCard"}>
                                <span className="title">{detail.title}</span>
                                <span className="value">{detail.value}</span>
                            </div>)
                        }
                    </div>
                    <div className={classes.rightDetailsSection}>
                        {
                            electricalData.map(detail => <div key={detail.title} className={"detailsCard"}>
                                <span className="title">{detail.title}</span>
                                <span className="value">{detail.value}</span>
                            </div>)
                        }
                    </div>
                </section>
            </section>
        </CenterLayout>
    </div>
};

export default injectSheet(styles)(Product);