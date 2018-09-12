import React from 'react'
import {Route,Redirect} from 'react-router-dom'

const SpecialRoute = props => 
{

let routeComponent= (<div/>);
if(props.isProtected)
    routeComponent=  (
                        <Route
                        exact={props.exact}
                        path={props.path}
                        render={prop => props.isAuthenticated?(                        
                            <props.component {...prop} routes={props.routes} isAuthenticated={props.isAuthenticated } isProtected={props.isProtected} />
                        ):(<Redirect
                            to='/userlogin'
                        />)}
                        />
                     )
else 
        routeComponent=  (
                            <Route
                            exact={props.exact}
                            path={props.path}
                            render={prop =>                       
                                   <props.component {...prop} routes={props.routes} isAuthenticated={props.isAuthenticated } isProtected={props.isProtected}  />
                                  }
                            />
                        )
 
 
 return routeComponent;
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