import { Formik } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

import {
  Form,
  Label,
  Text,
  Field,
  Button,
  ErrorMessage,
} from './ContactFormStyled';


const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().positive().integer().required(),
});

export const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, actions) => {
    const newName = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    }
    const newContactNameNormalized = values.name.toLowerCase();
    const findContact = contacts.find(
      contact => contact.name.toLowerCase() === newContactNameNormalized
    );
    findContact
      ? Notify.warning(`${values.name} is already in contacts`)
      : dispatch(addContact(newName));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <Label>
          <Text>Name</Text>
          <Field type="text" name="name"></Field>
          <ErrorMessage name="name" component="span"></ErrorMessage>
        </Label>
        <Label>
          <Text>Number</Text>
          <Field type="tel" name="number"></Field>
          <ErrorMessage name="number" component="span"></ErrorMessage>
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
