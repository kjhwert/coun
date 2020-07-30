import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "../screens/Home";
import NotFound from "../screens/NotFound";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

export default () => {
    return (
        <Router>
            <Header/>
            <Banner/>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/404' component={NotFound} />
                <Redirect path='*' to='/404' />
            </Switch>
            <Footer/>
        </Router>
    )
}
