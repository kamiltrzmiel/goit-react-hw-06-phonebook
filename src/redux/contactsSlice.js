import { createSlice, combineReducers } from '@reduxjs/toolkit';

const initState = [
  { id: 'id-1', name: 'Jose Arcadio Morales', number: '+34 459-123-563' },
  { id: 'id-2', name: 'Jan Nowakowski', number: '+48 443-859-125' },
  { id: 'id-3', name: 'Bruno Bierhals', number: '+49 645-122-792' },
  { id: 'id-4', name: 'Rolf Ruckzug', number: '+43 227-252-929' },
];

const contactsSlice = createSlice({
  name: 'items',
  initialState: JSON.parse(localStorage.getItem('contacts')) || initState,
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
