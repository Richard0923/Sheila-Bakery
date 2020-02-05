import React,{ Component } from "react";
import {
    NavLink
} from "react-router-dom";

class Header extends Component{
    render(){
        return (
            <div id="Header">
                <h1>Sheila's Bakery</h1>
                    <ul classname="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/menu">Menu</NavLink></li>
                        <li><NavLink to="/aboutus">Our Story</NavLink></li>
                    </ul>
            </div>
        );
    }
}

export default Header;
