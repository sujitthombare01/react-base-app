import {combineReducers} from 'redux'
import authenticationReducer from './authuserReducer/authenticationReducer'
import routeMapperReducer from './routersReducer/routeMapperReducer'

const reducers = combineReducers({userAuth:authenticationReducer,routeReducer:routeMapperReducer})

export  {reducers}