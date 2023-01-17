import axios from "axios"

import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async(_, thunkApi) => {
  try{
    const {data} = await axios.get('/contacts')
    return data
  }
  catch(e){
    return thunkApi.rejectWithValue(e.message)
  }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(contactId, thunkApi) => {
  try{
    const {data} = await axios.delete(`/contacts/${contactId}`)
    return data
  }
  catch(e){
    return thunkApi.rejectWithValue(e.message)
  }
})

export const addContact = createAsyncThunk(
  '/contacts/addContact',
  async(contact, thunkApi) => {
    try{
      const {data} = await axios.post('/contacts', {...contact})
      return data
    }
    catch(e){
      return thunkApi.rejectWithValue(e.message)
    }
})
