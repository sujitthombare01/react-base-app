import React, { Component } from 'react';
import { BrowserRouter as Router  ,Link } from 'react-router-dom';
import {SpecialRoute} from './components/basic-components'


import {connect } from 'react-redux'

import './App.css';
import { authenticated } from './actions/authuserAction/authenticationAction'
/*
import  { Home ,Contact ,About ,Link1,Link2,Link3 } from './components/research-dev-componets'





const routes =[{path:'/home' ,component:Home ,exact:true},
               {path:'/about' ,component:About,exact:true},
               {path:'/contact' ,component:Contact ,
                 routes :[{path:'/contact/link1' ,component:Link1,exact:true},
                          {path:'/contact/link2' ,component:Link2,exact:true},
                          {path:'/contact/link3' ,component:Link3,exact:true},]
                }
              ]
*/

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Welcome to React </h1>
        </header>
        <input type='button' value={this.props.isAuthenticated?'Logout':'Log In'} onClick={()=>{this.props.authentication(this.props.isAuthenticated)}}/>
                 <div className="App-intro">
                  <Router>
                      <div>
                      
                        <Link to="/home">Home</Link> 
                       
                        <Link to="/about" >About</Link>
                        
                        <Link to="/contact">Contact</Link><hr/>
                     
                
                      {this.props.app_routes.map((route, i) => <SpecialRoute key={i} {...route}  isAuthenticated={this.props.isAuthenticated} />)}
                   
                    </div>
                          
                  </Router>
      
                 </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    isAuthenticated :state.userAuth.isAuthenticated,
    app_routes:state.routeReducer.application_routes
  }
}



const mapdispatchToProps={
  authentication:authenticated
}

export default connect(mapStateToProps,mapdispatchToProps)(App);
