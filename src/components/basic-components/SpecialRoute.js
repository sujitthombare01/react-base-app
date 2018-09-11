import React from 'react'
import {Route,Redirect} from 'react-router-dom'

const SpecialRoute = props => 
{
//console.log('props',props);

return  (
            <Route
            exact={props.exact}
            path={props.path}
            render={prop => props.isAuthenticated?(
            
                <props.component {...prop} routes={props.routes} isAuthenticated={props.isAuthenticated} />
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