//Файл оголошеня стор Redux
import {createStore} from'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from './reduser';
import initContacts from "./constants";

export const initialState = {
   contacts: initContacts,
}



// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//    reduser : {
//       contacts: 
//    }
// });