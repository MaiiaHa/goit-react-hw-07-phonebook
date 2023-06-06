import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default function App() {
  return (
    <div>
      <Container title={'Phonebook'}>
        <ContactForm />
      </Container>
      <Container title={'Contacts'}>
        <Filter />
        <ContactList />
      </Container>
    </div>
  );
}
