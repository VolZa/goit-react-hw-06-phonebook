import { FormPhB } from "components/Form/FormPhB";
import { Title } from "components/Title/Title";
import { GlobalStyle } from "./Global.styled";
import { ContactList } from 'components/Contact-list/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Title title="Phonebook" />
      <FormPhB/>
      <Title title="Contacts" />
      <Filter/>
      <ContactList/>      
    </Layout>
  );  
};