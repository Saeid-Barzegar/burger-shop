import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const navs = [
    {
        to: '/standorte',
        label: 'STANDORTE',
        exact: false
    },
    {
        to: '/impressum',
        label: 'IMPRESSUM',
        exact: false
    },
    {
        to: '/',
        label: 'VERGLEICH',
        exact: true
    }   
]

const Navigation = () => (
    <nav>
        <ul>
            {
                navs.map((nav, index)=>
                    <NavLink key={index} to={nav.to} exact={nav.exact}>
                        <li>{nav.label}</li>
                    </NavLink>
                )
            }
        </ul>
        <img src={logo} className="logo" alt="logo"/>
    </nav>
);

export default Navigation;