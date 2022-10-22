import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import injectSheet from "react-jss";

const styles = {
    mainStyle: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
    },
}

const Main = ({ classes }) => {
    return <div className={classes.mainStyle}>
        <Router basename="/silesia-electric-motors">
            <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/product/:id">
                        <Product />
                    </Route>
                </Switch>
            <Footer />
        </Router>
    </div>
}

export default injectSheet(styles)(Main);