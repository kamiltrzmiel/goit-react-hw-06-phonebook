import css from './contactList.module.css'
import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);

  const ContactsFilter = () =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()));
    const filteredContacts = ContactsFilter();
    
    return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <ContactListItem
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        />
      ))}
    </ul>
  );
};
export default ContactList