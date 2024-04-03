import { Component } from 'react';
import { ContactForm, ContactList, Filter, Section } from './Phonebook';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContect = data => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    const id = nanoid();
    this.setState({
      contacts: [...this.state.contacts, { ...data, id }],
    });
  };
  handleTypeFilter = value => {
    this.setState({
      filter: value,
    });
  };
  handleRemoveContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(c => c.id !== id),
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const filterList = contacts.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <Section title="Phonebook" />
        <ContactForm onAddContact={this.handleAddContect} />
        <Section title="Contacts" />
        <Filter filter={filter} onTypeFilter={this.handleTypeFilter} />
        <ContactList
          contacts={filterList}
          onRemoveContact={this.handleRemoveContact}
        />
      </>
    );
  }
}
