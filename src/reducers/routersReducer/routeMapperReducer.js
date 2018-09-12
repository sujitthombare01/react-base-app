import {Login} from '../../components/auth-componets'
import  { Home ,Contact ,About ,Link1,Link2,Link3 } from '../../components/research-dev-componets'

const routesPaths ={ application_routes :
                        [  {path:'/userlogin' ,component:Login ,exact:true ,isProtected:false} ,
                           {path:'/' ,component:Home ,exact:true ,isProtected:true},
                           {path:'/about' ,component:About,exact:true ,isProtected:true},
                           {path:'/contact' ,component:Contact ,isProtected:true,
                                            routes :[{path:'/contact/link1' ,component:Link1,exact:true,isProtected:true},
                                                    {path:'/contact/link2' ,component:Link2,exact:true,isProtected:true},
                                                    {path:'/contact/link3' ,component:Link3,exact:true,isProtected:true}]
                                }
                        ]
                }

const routeMapperReducer = (state=routesPaths,payload) =>{

    return state
}               

export default routeMapperReducer  