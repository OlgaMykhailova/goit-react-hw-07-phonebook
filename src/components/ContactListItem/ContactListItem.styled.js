import styled from 'styled-components';

export const ListItem = styled.li`
display: flex;
justify-content: space-between;
&:not(:last-child) {
    margin-bottom: 10px;
  }
`
export const Text = styled.span`
color: rgb(15, 103, 165);
`

export const Button = styled.button`font-family: var(--font);
  cursor: pointer;
  background-color: #5EC4CD;
  line-height: 1.62;
  border: transparent;
  border-radius: 5px;
  color: black;
  border: 1px solid black;

&:hover,
&:focus {
  color: black;
  background-color: #5EC4CD;
  box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),
    0px 2px 2px rgb(0 0 0 / 12%);
    `