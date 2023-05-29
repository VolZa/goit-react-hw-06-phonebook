import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import initContacts from "../constants";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
   value: initContacts,
  },
  reducers: {
   addContact(state, action) {
      state.push(action.payload);
      },
   delContact(state, action) {
      state.value = state.value.filter(({id}) => id !== action.payload);
      }
   },
});
const presistConfig = {
   key: "contacts",
   storage,
};

export const storeContactsReducer = persistReducer(
   presistConfig, contactsSlice.reducer,
)
// Експортуємо генератори екшенів та редюсер
export const { addContact, delContact } = contactsSlice.actions;
export const getContacts = ({ contacts: { value } }) => value;
