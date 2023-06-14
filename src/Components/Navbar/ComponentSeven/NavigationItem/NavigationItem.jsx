import {NavLink} from "react-router-dom";
import React from "react";

const NavigationItem = ({navName='Home', iconName='fa-home', exactTo="/",clicked,activeLink,}) =>{
    return (
        <li key={iconName} className={`nav-item ${activeLink === exactTo ? "active" : ""}`} onClick={()=>clicked(exactTo)}>
            <NavLink className="nav-link" exact to={exactTo}>
                <i className={`fa ${iconName}`} aria-hidden="true"/>
                {navName}
            </NavLink>

        </li>
    )
}

export default NavigationItem;