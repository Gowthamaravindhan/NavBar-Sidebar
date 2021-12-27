import React from "react";

import './NavSide.css';
import {SidebarMenu} from './SidebarMenu';

function Sidebar() {
    return <div className="Sidebar">
        <ul className="Sidebarul">
            {SidebarMenu.map((val, key) => {
                return (
                    <li key={key} className="Siderow">
                    <div className="icon">{val.icon}</div>
                    <div className="title">{val.title}</div> 
                    </li>
                );
            })}
        </ul>

    </div>
}

export default Sidebar