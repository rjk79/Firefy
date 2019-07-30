import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { merge } from 'lodash'


export default (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ERRORS: {
            let newState = Object.values(action.errors)
            return newState
        } //inc {} if lexical error
        case RECEIVE_CURRENT_USER:
            return []
        default:
            return state;
    }
}