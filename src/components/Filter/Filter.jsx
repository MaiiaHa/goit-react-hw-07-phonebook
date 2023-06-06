import css from './Filter.module.css';
import { FaSistrix } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { searchContacts } from 'redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  const hendleChangeInput = e => {
    dispatch(searchContacts(e.target.value));
  };

  return (
    <label className={css.inputFind}>
      <FaSistrix />
      Find contacts by name:
      <input
        className={css.inputFindField}
        type="text"
        placeholder="search"
        name="filter"
        onChange={hendleChangeInput}
      />
    </label>
  );
};

export default Filter;
