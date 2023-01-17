import { createSlice} from "@reduxjs/toolkit";

import { fetchContacts, deleteContact, addContact } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
}

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload
}

const contactsSlice = createSlice({
  name: "contacts",

  initialState: {
    contacts: [],
    isLoading: false,
    error: null
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,


    [fetchContacts.fulfilled](state, {payload}){
      state.isLoading = false;
      state.error = null;
      state.contacts = payload
    },

    [deleteContact.fulfilled](state, {payload}){
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(({id}) => id !== payload.id);
    },

    [addContact.fulfilled](state, {payload}){
      state.isLoading = false;
      state.error = null;
      state.contacts.unshift(payload);
    }
  },
})

export const contactsReducer = contactsSlice.reducer
