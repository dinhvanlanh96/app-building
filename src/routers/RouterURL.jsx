import React from 'react';
import Dashboards       from '../Componets/Pages/Dashboards/Dashboards';
import Buildings        from '../Componets/Pages/Buildings/Buildings';
import Rooms            from '../Componets/Pages/Rooms/Rooms';
const RouterURL=[
        {
            path:'/',
            exact:true,
            main:()=><Dashboards/>
        },
        {
            path:'/buildings',
            exact:true,
            main:()=><Buildings/>
        },
        {
            path:'/rooms',
            exact:true,
            main:()=><Rooms/>
        }
];
export default RouterURL;