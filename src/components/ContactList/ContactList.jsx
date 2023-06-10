import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const contactsFromState = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = Object.values(filter).join().toLowerCase();
    return contactsFromState.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contacts = getVisibleContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, phone }) => (
        <li className={css.listItem} key={id}>
          {name}: {phone}
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
