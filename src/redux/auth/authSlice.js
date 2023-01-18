import { createSlice } from "@reduxjs/toolkit";

import { signUp, logIn, logOut, currentUser } from "./operations";

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    userData: {name: null, email: null},
    token: null,
    isLoggedIn: false
  },

  extraReducers: {
    [signUp.fulfilled](state, {payload}){
      state.userData = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [logIn.fulfilled](state, {payload}){
      state.userData = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [logOut.fulfilled](state){
      state.userData = {name: null, email: null};
      state.token = null;
      state.isLoggedIn = false;
    },

    [currentUser.fulfilled](state, {payload}){
      state.userData = payload;
      state.isLoggedIn = true;
    }
  },
})

export const authReducer = authSlice.reducer

