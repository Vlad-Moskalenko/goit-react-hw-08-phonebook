import css from './ContactsList.module.css';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return contacts.length > 0 ? (
    <ul className={css.contacts}>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  ) : (
    <p>There are no contacts yet...</p>
  );
};
