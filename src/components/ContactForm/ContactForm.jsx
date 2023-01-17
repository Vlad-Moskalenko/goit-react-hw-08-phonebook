import css from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);
  const [contact, setContact] = useState(INITIAL_STATE);

  const onChangeInput = ({ target: { name, value } }) => {
    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const reset = () => setContact(INITIAL_STATE);

  const isUniqueContact = (name, contacts) =>
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

  const onSubmitForm = e => {
    e.preventDefault();

    const name = e.target.name.value;

    if (isUniqueContact(name, contacts)) {
      return alert(`${name} is already exist`);
    }

    dispatch(addContact(contact));

    reset();
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label className={css.inputWrapper}>
        Name
        <input
          onChange={onChangeInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={contact.name}
          required
        />
      </label>
      <label className={css.inputWrapper}>
        Number
        <input
          onChange={onChangeInput}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={contact.phone}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
