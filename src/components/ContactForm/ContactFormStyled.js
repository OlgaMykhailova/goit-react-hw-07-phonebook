import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  border: 2px dotted black;
  border-radius: 5px;
  padding: 10px;
  color: rgb(15, 103, 165);
  background-color: rgb(183, 220, 230);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Text = styled.span`
margin-bottom: 5px;
`

export const Field = styled(FormikField)`
  background-color: white;
  border: 1px solid black;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 4px;
  padding: 10px;
  color: rgb(15, 103, 165);
`;

export const ErrorMessage = styled(FormikErrorMessage)`
color: red;
`

export const Button = styled.button`
  cursor: pointer;
  background-color: #5EC4CD;
  line-height: 1.62;
  border: transparent;
  padding: 6px 22px;
  width: 120px;
  border-radius: 5px;
  color: black;
  border: 1px solid black;
  &:hover,
  &:focus {
    color: black;
    background-color: #5EC4CD;
    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),
      0px 2px 2px rgb(0 0 0 / 12%);
  }
`;
