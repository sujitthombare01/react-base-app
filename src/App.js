import React, { Component } from 'react';
import { BrowserRouter as Router  } from 'react-router-dom';
import {SpecialRoute} from './components/basic-components'


import {connect } from 'react-redux'

import './App.css';

import { authenticated } from './actions/authuserAction/authenticationAction'


class App extends Component {

  render() {

    return (
      <div className="App">
                 <div className="App-intro">
                  <Router>
                    <div>
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
