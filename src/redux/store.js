import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import authReducer from "./authSlice";
import taskReducer from "./taskSlice";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
const middleware = thunk;
const reducer = combineReducers({
  reducer: { auth: authReducer, task: taskReducer },
});
const store = configureStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
