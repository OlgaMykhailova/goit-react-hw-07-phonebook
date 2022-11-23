import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Notify } from 'notiflix';
import { deleteContact } from '../../redux/operations';
import { Button, ListItem, Text } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = (id) => {
    Notify.success(`${name} has been removed from your contacts`);
    dispatch(deleteContact(id))
  }
  return (
    <ListItem key={id}>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => handleDeleteContact(id)}>
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
