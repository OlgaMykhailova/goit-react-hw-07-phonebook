import { Formik } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

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
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const newName = {
      createdAt: new Date(),
      name: values.name,
      phone: values.number,
    }
    const newContactNameNormalized = values.name.toLowerCase();
    const findContact = contacts.find(
      contact => contact.name.toLowerCase() === newContactNameNormalized
    );
    const handleAddContact = (newName) => {
      Notify.success(`${values.name} has been added to your contacts`);
      dispatch(addContact(newName))
    }
    findContact
      ? Notify.warning(`${values.name} is already in contacts`)
      : handleAddContact(newName);
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
