const setUser = (id)=>{
    
 return  function(dispatch) {


           let userObj = {username:'sujittttt',age:28,email:'sddhf@jdd.com'};
           dispatch({type:'SET_USERS',payload:userObj})
           
           
 }

}

const authenticated=(lastStatus)=>{

    return dispatch=>{
        if(lastStatus){
            dispatch({type:'LOGOUT',payload:false})
        }
        else{
            dispatch({type:'LOGIN',payload:true})
        }
    }
}


export { setUser ,authenticated}