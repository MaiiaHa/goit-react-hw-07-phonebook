import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { FaUserPlus, FaTty, FaUserAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsFromState = useSelector(getContacts);

  const nameRandomId = nanoid(10);
  const numberRandomId = nanoid(10);

  const formSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const checkedName = contactsFromState.find(
      el => el.name === form.elements.name.value
    );
    if (checkedName) {
      alert(
        `${form.elements.name.value} is already in list. Please enter other name.`
      );
      form.reset();
      return;
    }

    dispatch(
      addContact({
        id: nanoid(5),
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.contacts} action="" onSubmit={formSubmit}>
      <label className={css.input}>
        <FaUserAlt width={160} height={160} />
        <span className={css.inputName}>Name:</span>
        <input
          className={css.inputField}
          type="text"
          name="name"
          id={nameRandomId}
          placeholder="Name Surname"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.input}>
        <FaTty />
        <span className={css.inputName}>Number:</span>
        <input
          className={css.inputField}
          type="tel"
          name="number"
          id={numberRandomId}
          placeholder="555-55-55"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.inputBtn} type="submit" aria-label="Add contact">
        <FaUserPlus />
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
