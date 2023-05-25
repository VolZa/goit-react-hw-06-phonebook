import  PropTypes from 'prop-types'
import { Contacts, Contact } from './ContactList.styled';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = ({ delContact }) => {
   const contacts = useSelector(getContacts);
   const filter = useSelector(getFilter);
   const dispatch = useDispatch();
   const getFilteredContacts = () => 
      contacts.filter(contact => 
         contact.name.toLowerCase().includes(filter.toLowerCase()
   ));
   const sortedFilteredContacts = getFilteredContacts().sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
   return (
      <Contacts>
         {sortedFilteredContacts.map(contact => {
            return(
               <Contact key={contact.id}>
                  <span>{contact.name}: </span>
                  <span>{contact.number}</span>
                  <button type="button" onClick={()=>dispatch(delContact(contact.id))} >Delete</button>
               </Contact>
            );
         })}        
      </Contacts>
   );
};

ContactList.propTypes = {
   contacts: PropTypes.array.isRequired,
   delContact: PropTypes.func.isRequired
};