import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteContact } from '../../redux/contactsSlice';
import { Button, ListItem, Text } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ListItem key={id}>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
