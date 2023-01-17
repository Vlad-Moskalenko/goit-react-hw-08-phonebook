import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector([selectFilter, selectContacts], (filter, {contacts}) => {
  return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
})
