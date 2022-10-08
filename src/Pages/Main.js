import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
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
        <Router basename="/">
            <Navbar />
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                </Switch>
            <Footer />
        </Router>
    </div>
}

export default injectSheet(styles)(Main);