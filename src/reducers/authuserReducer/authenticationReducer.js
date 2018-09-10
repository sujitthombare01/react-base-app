let initState = { isAuthenticated:false , user:{username:'init',age:20,email:'init@jdd.com'}}
const authenticationReducer=  (state=initState,action)=>{
    switch(action.type)
    {
        case 'SET_USERS' : state={...state, user:action.payload}
                           break;
        case 'LOGIN' : state={...state, isAuthenticated:action.payload}
        break;
        case 'LOGOUT' : state={...state, isAuthenticated:action.payload}
        break;
        default: state={...state};
                   break;

    }

    return state
}

export default authenticationReducer                