import React, {Component } from "react";
import {
    Route,
    HashRouter,
} from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Aboutus from "./Aboutus";
import Header from "./Header";


class Main extends Component {
    render (){
        return ( 
            <HashRouter>
                <div>
                    <div classname="Header">
                        <Header></Header>
                    </div>
                    <div classname="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/menu" component={Menu}/>
                        <Route path="/aboutus" component={Aboutus}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
