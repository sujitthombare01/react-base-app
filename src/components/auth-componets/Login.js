import React , {Component} from 'react'
import {connect} from 'react-redux'
class Login extends Component{
    render(){
        return (
            <div>Login Page</div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        user:'Abcd'
    }
}
export default connect(mapStateToProps)(Login)