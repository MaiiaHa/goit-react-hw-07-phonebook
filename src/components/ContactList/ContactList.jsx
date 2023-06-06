import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/slice';

const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);
  const contactsFromState = useSelector(getContacts);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contactsFromState.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contacts = getVisibleContacts();

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.listItem} key={id}>
          {name}: {number}
          <button
            className={css.btn}
            type="button"
            onClick={() => deleteContacts(id)}
            aria-label="Delete contact"
          >
            <DeleteIcon fill="white" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
