import axios from 'axios';

import { createAsyncThunk } from "@reduxjs/toolkit"

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
  set(token){
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset(){
    axios.defaults.headers.common.Authorization = '';
  }
}

const signUp = createAsyncThunk('auth/signUp', async (userData, thunkApi) => {
  try{
    const {data} = await axios.post('/users/signup', userData)
    token.set(data.token)
    return data
  }
  catch(e){
    return thunkApi.rejectWithValue(e.message)
  }
})

const logIn = createAsyncThunk('auth/login', async (userData, thunkApi) => {
  try{
    const {data} = await axios.post('/users/login', userData)
    token.set(data.token)
    return data
  }
  catch(e){
    return thunkApi.rejectWithValue(e.message)
  }
})

const logOut = createAsyncThunk('auth/logout', async (userData, thunkApi) => {
  try{
    await axios.post('/users/logout')
    token.unset()
  }
  catch(e){
    return thunkApi.rejectWithValue(e.message)
  }
})

const currentUser = createAsyncThunk('auth/currentUser', async (_, thunkApi) => {
  const {auth} = thunkApi.getState()
  const persistedToken = auth.token

  if(!persistedToken){
    return thunkApi.rejectWithValue('Unable to fetch user');
  }

  try{
    token.set(persistedToken)
    const {data} = await axios.get('/users/current')
    return data
  }
  catch(e){
    return thunkApi.rejectWithValue(e.message)
  }
})

export {logIn, logOut, signUp, currentUser}
