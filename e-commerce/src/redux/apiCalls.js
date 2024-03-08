import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
  registrationStart,
  registrationSuccess,
  registrationFailure,
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    window.location.href = "/home";
  } catch (err) {
    console.log(err);
    dispatch(loginFailure());
  }
};

export const logout = (dispatch) => {
  try {
    dispatch(logoutSuccess());
    window.location.href = "/login";
  } catch (error) {
    console.log(error.message);
  }
};

export const registration = async (dispatch, user) => {
  dispatch(registrationStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registrationSuccess(res.data));
    window.location.href = "/login";
  } catch (err) {
    dispatch(registrationFailure());
  }
};
