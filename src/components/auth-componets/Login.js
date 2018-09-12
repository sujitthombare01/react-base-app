import React , {Component} from 'react'
import {connect} from 'react-redux'

import '../component.css'

class Login extends Component{
    render(){
        return (
            <div className="container">
               <div className="center-div">
                    <div className="form-group">
                    <span> User Login </span>
                    </div>
                <div className="form-group">
                    <input type='text' placeholder='Username'  className="form-input"/>
                    <input type='password' placeholder='Password' className="form-input"/>
                   
                 </div> 
                 <div className="form-group">
                    <input type='button' value='Sign In' className='form-button-sign-in'/>
                    <input type='button' value='Clear' className='form-button-sign-in'/>
                 </div>         
               </div>

            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        user:'Abcd'
    }
}
export default connect(mapStateToProps)(Login)