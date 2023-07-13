import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ textAlign: 'center'}}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;