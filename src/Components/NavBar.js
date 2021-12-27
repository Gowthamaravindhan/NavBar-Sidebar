import React from "react";

import './Nav.css';
import {NavbarMenu} from './NavbarMenu';
import logo from './logo.png';

function NavBar(){
    return (
        <div className="Navbar">
            <img src= {logo} alt="Alpha"/>
            <ul className="Navbarul">
                {NavbarMenu.map((val,key) => {
                    return (
                        <li key={key} className="Navrow">
                            <div className="icon">{val.icon}</div>
                        </li>
                    );
                })}
            </ul>

        </div>
    )
}

export default NavBar