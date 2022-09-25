import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const mainStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
}

const Main = () => {
    return <div style={mainStyle}>
        <Router basename="/">
            <Navbar />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    </div>
}

export default Main;