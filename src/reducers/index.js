import { combineReducers } from 'redux'
import { clickReducer } from './clickReducer'

export const Reducers = combineReducers({
    clickState: clickReducer
});