import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        applyMiddleware(...middlewares)
    )
)

export default configureStore;