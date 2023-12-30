import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoggedIn: false,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.isLoggedIn = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
      state.isLoggedIn = true;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.isLoggedIn = false;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
      state.error = false;
      state.isLoggedIn = false;
      state.isFetching = false;
    },
    registrationStart: (state) => {
      state.isFetching = true;
    },
    registrationSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    registrationFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  registrationStart,
  registrationSuccess,
  registrationFailure,
} = userSlice.actions;
export default userSlice.reducer;
