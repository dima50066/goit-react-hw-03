import React from 'react';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactListItem}>
          <Contact key={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
