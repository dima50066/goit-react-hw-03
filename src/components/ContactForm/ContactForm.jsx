import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters long')
      .max(50, 'Name must be at most 50 characters long')
      .required('Name is required'),
    number: Yup.string()
      .min(3, 'Number must be at least 3 characters long')
      .max(50, 'Number must be at most 50 characters long')
      .required(),
  });

  const handleSubmit = (values, { setSubmiting, resetForm }) => {
    resetForm();
    addContact(values.name, values.number);
    setSubmiting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" required />
        </label>
        <label className={css.label}>
          Number
          <Field type="tel" name="number" required />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
