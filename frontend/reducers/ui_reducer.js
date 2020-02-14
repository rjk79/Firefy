import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import songmenuReducer from "./songmenu_reducer";


const uiReducer = combineReducers({
    modal: modalReducer,
    songmenu: songmenuReducer,
})

export default uiReducer