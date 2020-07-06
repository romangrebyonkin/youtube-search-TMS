import videReducer from './video'
import {combineReducers} from 'redux'

const allReducer = combineReducers({
    video: videReducer
})

export default allReducer