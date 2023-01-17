import { createSlice } from "@reduxjs/toolkit";

import { signUp, logIn, logOut } from "./operations";

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    userData: {name: null, email: null},
    token: null,
    isLoggedIn: false
  },

  extraReducers: {
    [signUp.fulfilled](state, {payload}){
      state.userData = payload.userData;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [logIn.fulfilled](state, {payload}){
      state.userData = payload.userData;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [logOut.fulfilled](state){
      state.userData = {name: null, email: null};
      state.token = null;
      state.isLoggedIn = false;
    }
  },
})

export const authReducer = authSlice.reducer

