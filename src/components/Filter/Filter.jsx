import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Label, Text, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
      ></Input>
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func,
};
