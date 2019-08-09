import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer";
import searchesReducer from './search_reducer'
import musicplayerReducer from './musicplayer_reducer'

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer,
    searches: searchesReducer,
    musicplayer: musicplayerReducer,
})

export default rootReducer