import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const defaultState = {
    token: ''
}

const reducer = function (state = defaultState, action) {
    switch (action.type) {
        case 'USER_REGISTER':
            return {
                ...state
            }
        case 'USER_LOGIN':
            return {
                ...state,
                token: action.payload
            }
        default:
            return defaultState;
    }
}

const store =  createStore(reducer, applyMiddleware(thunk))
export default store