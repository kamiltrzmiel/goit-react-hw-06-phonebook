import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import contactsReducer from './contactsSlice';

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
