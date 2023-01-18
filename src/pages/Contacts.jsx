import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Section } from '../components/Section/Section';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';

import { fetchContacts } from '../redux/contacts/operations';
import { selectContacts } from '../redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ minWidth: '500px' }}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title={isLoading && !error ? 'Wait a minute...' : 'Contacts'}>
        {!error ? (
          <>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <p>Oops, something went wrong...</p>
        )}
      </Section>
    </div>
  );
};

export default Contacts;
