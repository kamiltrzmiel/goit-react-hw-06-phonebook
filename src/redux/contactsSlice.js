import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { initState } from './store';

const contactsSlice = createSlice({
  name: 'items',
  initialState: JSON.parse(localStorage.getItem('contacts') || 'null') || initState,
  reducers: {
    handleAddContact: (state, action) => [...state, action.payload],
    handleDelContact: (state, action) => state.filter(contact => contact.id !== action.payload),
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (state, action) => action.payload,
  },
});

export const { handleAddContact, handleDelContact } = contactsSlice.actions;
export const { filterContact } = filterSlice.actions;

const contactsReducer = combineReducers({
  [contactsSlice.name]: contactsSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
});

export default contactsReducer;
