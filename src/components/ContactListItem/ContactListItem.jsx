import css from './ContactListItem.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactListItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  const handleClickBtn = () => dispatch(deleteContact(id));

  return (
    <li className={css.contact}>
      {name}: {phone}
      <button onClick={handleClickBtn} type="button">
        Delete
      </button>
    </li>
  );
};
