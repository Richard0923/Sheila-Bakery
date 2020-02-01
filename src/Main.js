import React, {Component } from "react";
import {
    Route,
    HashRouter,
    NavLink
} from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Aboutus from "./Aboutus";


class Main extends Component {
    render (){
        return ( 
            <HashRouter>
                <div>
                    <h1>Sheila's Bakery</h1>
                    <ul classname="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/menu">Menu</NavLink></li>
                        <li><NavLink to="/aboutus">Our Story</NavLink></li>
                    </ul>
                    <div classname="content">
                        <Route path="/" component={Home}/>
                        <Route path="/menu" component={Menu}/>
                        <Route path="/aboutus" component={Aboutus}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
