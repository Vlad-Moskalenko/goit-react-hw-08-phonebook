import css from './ContactListItem.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleClickBtn = () => dispatch(deleteContact(id));

  return (
    <li className={css.contact}>
      {name}: {number}
      <button onClick={handleClickBtn} type="button">
        Delete
      </button>
    </li>
  );
};
