import React from 'react';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactListItem}>
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
