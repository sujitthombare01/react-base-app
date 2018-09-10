import React from 'react'
import {Route,Redirect} from 'react-router-dom'

const SpecialRoute = route => 
{
   
    
return (
            <Route
            exact={route.exact}
            path={route.path}
            render={props => route.isAuthenticated?(
            
                <route.component {...props} routes={route.routes} isAuthenticated={route.isAuthenticated} />
            ):(<Redirect
                to='/'
              />)}
            />
       )
};

/*
const SpecialRoute = route => 
{
return (
            <Route
            path={route.path}
            render={props => (
            
                <route.component {...props} routes={route.routes} />
            )}
            />
       )
};
*/

export default SpecialRoute;