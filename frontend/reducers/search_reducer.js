import { merge } from 'lodash'

import { RECEIVE_ALL_SEARCHES, REMOVE_ALL_SEARCHES } from '../actions/search_actions';

const searchesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_SEARCHES:
            return action.searches
        case REMOVE_ALL_SEARCHES:
            // debugger
            return {}
        default:
            return state;
    }
}

export default searchesReducer