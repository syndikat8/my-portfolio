import {combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'

let rootReducers = combineReducers({
  form: formReducer
})

let store = createStore(rootReducers)

export default store