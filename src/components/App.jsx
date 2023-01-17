import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

import { fetchContacts } from 'redux/operations';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className="app-wrapper">
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
    </main>
  );
};
