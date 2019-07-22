import React from 'react';
import { Switch, Route } from "react-router-dom";
import ShopList from "./components/ShopList";
import Contact from "./components/Contact";
import About from "./components/About";

const routes = [
    {
        path: '/',
        component: ShopList,
        exact: true
    },
    {
        path: '/about',
        component: About,
        exact: false           
    },
    {
        path: '/contact',
        component: Contact,
        exact: false  
    },
]


const router = ()=>{
    return(
        <Switch>
            {
                routes.map((route, index)=> 
                    <Route key={index} path={route.path} component={route.component} exact={route.exact}/>
                )
            }
        </Switch>
    )
}

export default router