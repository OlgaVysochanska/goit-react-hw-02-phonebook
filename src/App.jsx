import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onHandleSubmit = data => {
    const name = data.name;
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const number = data.number;
    const id = nanoid();
    const contact = { id, name, number };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    console.log( data );
    

    // e.preventDefault();

    // e.target.elements.name.value = '';
    // e.target.elements.number.value = '';
  };

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDeleting = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render () {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onHandleSubmit={this.onHandleSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.onChangeFilter} />
        <ContactList contacts={visibleContacts} deleting={this.onDeleting} />
      </>
    );
  }
}