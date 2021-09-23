import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Products from "./Product";
import Home from "./Home";
import history from './History';
import SampleComponents from "./SampleComponents";

import PricingComponents from './FrontEndScreens/PricingComponent'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} />
                    <Route path="/SampleComponents" component={SampleComponents} />
                    <Route path="/Pricing" component={PricingComponents}/>
                </Switch>
            </Router>
        )
    }
}
