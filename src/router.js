import React from 'react';
import { Switch, Route } from "react-router-dom";
import Vergleich from "./components/Vergleich";
import Impressum from "./components/Impressum";
import Standorte from "./components/Standorte";

const routes = [
    {
        path: '/',
        component: Vergleich,
        exact: true
    },
    {
        path: '/standorte',
        component: Standorte,
        exact: false           
    },
    {
        path: '/impressum',
        component: Impressum,
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