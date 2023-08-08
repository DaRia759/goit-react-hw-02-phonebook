import React from "react";
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import PropTypes from 'prop-types';
import { Filter } from './Filter/Filter';
import ListContacts from './ContactList/ContactList';
import ContactsItem from "./ContactsItem/ContactsItem";
import css from './App.module.css';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      name: '',
    };
  }

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const isContactExist = contacts.some(contact => contact.name === name);
    
    if (isContactExist) {
      alert(`${name} is already in contacts.`);
    } else {
      const contactItem = {
        name,
        id: nanoid(),
        number,
      };
      
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contactItem]
      }));
    }
  };

  checkNameToSame = name => {
    const lowerCaseNewName = name.toLowerCase();
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === lowerCaseNewName
    );
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
 
    return(
      <div>
        <h1 className={css.h1}>Phonebook</h1>
        <Form onAddContact={this.handleAddContact} />
        <h2 className={css.h2}>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange}></Filter>
        <ListContacts children={
          <ContactsItem
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        }
        />
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      filter: PropTypes.string.isRequired,
    })
  ).isRequired,
};
