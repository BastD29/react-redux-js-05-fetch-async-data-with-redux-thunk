import { applyMiddleware, legacy_createStore as createStore } from "redux";
import dataReducer from "./reducer";
import thunk from "redux-thunk";

const store = createStore(dataReducer, applyMiddleware(thunk));

export default store;
