import React from 'react'
import { Link } from 'react-router-dom';
import {SpecialRoute} from '../basic-components'


const Contact = (props)=>{
   
    const {match,routes} = props
    return (<div>
                 Contact Component 
                 
                 <div>
                     <Link to={`${match.url}/link1`}>Link 1      </Link> 
                     <Link to={`${match.url}/link2`}>Link 2</Link>
                     <Link to={`${match.url}/link3`}>Link 3</Link><hr/>
                   
                 {routes.map((route, i) => <SpecialRoute key={i} {...route} isAuthenticated={props.isAuthenticated} />)}
                    
                 </div>    
            </div>)
}

export default Contact