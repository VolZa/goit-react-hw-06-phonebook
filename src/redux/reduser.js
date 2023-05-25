//файл оголошення функція для оновлення стану

// import { createReducer } from "@reduxjs/toolkit";
// import { addContact, delContact, onChangeInput} from "redux/actions"
// import { initialState } from "./store";


// export const rootReducer = (state = initialState) =>{
//    return state;
// };  

// export const addContactReducer = createReducer(initialState, {
//    [addContact]: (state, action) => {
//       return {
//          ...state,
//            contacts: [...state.contacts, action.payload]
//          }
//    },
//    [delContact]: (state, action) => {return state.filter(contact => contact.id !== action.payload);},
//    [onChangeInput]: (state, action) => {return state.filter(contact => contact.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()));},
// });


// return {[...state, action.payload]}


// export const addContactReducer = (state = initialState, action) =>{
//    switch(action.type){
//          case "formInput/addContact":
//             return {
//               ...state,
//                contacts: [...state.contacts, action.payload]
//             }
//          case "contacts/delContact":
//             return {
//               ...state,
//                contacts: state.contacts.filter(contact => contact.id!== action.payload)
//             }
//          case "filter/onChangeInput":
//             return {
//               ...state,
//                contacts: state.contacts.map(contact => {
//                   if(contact.id === action.payload.id){
//                      return {
//                        ...contact,
//                        ...action.payload
//                      }
//                   }
//                   return contact;
//                })
//             }
//          default:
//             return state;
//       }
//    };