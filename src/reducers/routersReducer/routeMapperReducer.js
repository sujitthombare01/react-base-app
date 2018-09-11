
import  { Home ,Contact ,About ,Link1,Link2,Link3 } from '../../components/research-dev-componets'

const routesPaths ={ application_routes :[  {path:'/home' ,component:Home ,exact:true},
                                {path:'/about' ,component:About,exact:true},
                                {path:'/contact' ,component:Contact ,
                                            routes :[{path:'/contact/link1' ,component:Link1,exact:true},
                                                    {path:'/contact/link2' ,component:Link2,exact:true},
                                                    {path:'/contact/link3' ,component:Link3,exact:true},]
                                }
                        ]
                }

const routeMapperReducer = (state=routesPaths,payload) =>{

    return state
}               

export default routeMapperReducer  