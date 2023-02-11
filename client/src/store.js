import {combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {configureStore} from "@reduxjs/toolkit";

const reducer=combineReducers({});
let initialState={};
const middleware=[thunk];
const store=configureStore(
    {reducer:reducer},
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
) 
export default store;