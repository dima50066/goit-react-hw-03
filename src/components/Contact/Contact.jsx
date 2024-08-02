import React from 'react';
import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
const Contact = ({ contact, name, number, onDelete }) => {
  return (
    <div className={css.contactCard}>
      <p className={css.contactText}>
        <FaUser />
        {name}
      </p>
      <p className={css.contactText}>
        <FaPhone />
        {number}
      </p>
      <button
        onClick={() => onDelete(contact.id)}
        type="button"
        className={css.contactDeleteBtn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
