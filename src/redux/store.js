//Файл оголошеня стор Redux
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit';

import { storeContactsReducer } from './contactsSlice';
import initContacts from "./constants";
import { filterSlice } from './filterSlice';

export const initialState = {
   contacts: initContacts,
}

export const store = configureStore({
   reducer: {
      contacts: storeContactsReducer,
      filter: filterSlice.reducer,
   },
   middleware: getDefaultMiddleware =>
   getDefaultMiddleware({
     serializableCheck: {
       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
     },
   }),
   
});

export const persistor = persistStore(store);

// import {createStore} from'redux';
// import { rootReducer } from './reduser';
// import { devToolsEnhancer } from "@redux-devtools/extension";
// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);



// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//    reduser : {
//       contacts: 
//    }
// });