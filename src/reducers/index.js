import {combineReducers} from 'redux'
import authenticationReducer from './authuserReducer/authenticationReducer'

const reducers = combineReducers({userAuth:authenticationReducer})

export  {reducers}