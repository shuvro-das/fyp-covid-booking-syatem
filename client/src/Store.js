import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";

import {
  //   userDeleteReducer,
  //   userDetailsReducer,
  //   userListReducer,
  userRegisterReducer,
  userSigninReducer,
  //   userTopSellerReducer,
  //   userUpdateProfileReducer,
  //   userUpdateReducer,
} from "./reducers/UserReducers.js";

// import { BookingReducer } from "./reducers/BookingReducer";
const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userSignin: userSigninReducer,
  userDetails: userRegisterReducer,

  // bookingCreate: BookingReducer,

  //   userDetails: userDetailsReducer,
  //   userUpdateProfile: userUpdateProfileReducer,
  //   userUpdate: userUpdateReducer,

  //   userList: userListReducer,
  //   userDelete: userDeleteReducer,
  //   userTopSellersList: userTopSellerReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
