//Файл оголошеня стор Redux
import {createStore} from'redux';
import initContacts from './constants';
import { devToolsEnhancer } from "@redux-devtools/extension";



const initialState = {
   contacts: initContacts,
}
const rootReducer = (state = initialState) =>{
   return state;
};  
// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//    reduser : {
//       contacts: 
//    }
// });