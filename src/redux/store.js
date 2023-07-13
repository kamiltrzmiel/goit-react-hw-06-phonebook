import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import contactsReducer from './contactsSlice';

export const initState = [
  { id: 'id-1', name: 'Jose Arcadio Morales', number: '+34 459-123-563' },
  { id: 'id-2', name: 'Jan Nowakowski', number: '+48 443-859-125' },
  { id: 'id-3', name: 'Bruno Bierhals', number: '+49 645-122-792' },
  { id: 'id-4', name: 'Rolf Ruckzug', number: '+43 227-252-929' },
];

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
