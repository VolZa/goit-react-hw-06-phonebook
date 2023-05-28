import { useState, useEffect } from "react";
import { FormPhB } from "components/Form/FormPhB";
import { Title } from "components/Title/Title";
import { GlobalStyle } from "./Global.styled";
import { ContactList } from 'components/Contact-list/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Layout } from 'components/Layout/Layout';
// import  initialContacts  from '../contacts.js';

//Патерн ініціалізації з локального сховища (туткод синхронний)
const getInitContakts = () => {  
  const savedPhoneBook = localStorage.getItem('contacts')
  if (savedPhoneBook !==null) {

    return JSON.parse(savedPhoneBook);
  } else {
    console.log('Телефонна книга з contacts.json')
    // return initialContacts;
  }
}

export const App = () => {
  const [contacts] = useState(getInitContakts);



  //якщо змінюється список контактів то перезаписуємо ого в локальне сховище
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts]);

 
 
  return (
    <Layout>
      <GlobalStyle />
      <Title title="Phonebook" />
      {/* <FormPhB addContact={addOneContact}/> */}
      <FormPhB/>
      <Title title="Contacts" />
      <Filter/>
      <ContactList/>      
    </Layout>
  );  
};

// contacts={filterContacts}
// delContact={delContact}






