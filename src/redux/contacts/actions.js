//файл оголошення екшенів програми
import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction("formInput/addContact", contact => {   
    return {
        payload: {
         id: nanoid(),
         name: contact.name,
         phone: contact.phone,
        }
    };
   });

export const delContact = createAction("contacts/delContact");



