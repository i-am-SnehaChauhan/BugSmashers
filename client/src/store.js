import {combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {configureStore} from "@reduxjs/toolkit";
import { shopReducer } from "./reducers/shopReducer";
import { userReducer } from "./reducers/userReducer";
import { itemReducer } from "./reducers/itemReducer";

const reducer=combineReducers({
    shops:shopReducer,
    user:userReducer,
    items:itemReducer
});
let initialState={};
const middleware=[thunk];
const store=configureStore(
    {reducer:reducer},
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
) 
export default store;