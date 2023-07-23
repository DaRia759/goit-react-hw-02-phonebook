import React from "react";
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import PropTypes from 'prop-types';
import { Filter } from './Filter/Filter';
import { ContactList } from "./ContactList/ContactList";
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

  render() {
    const { contacts } = this.state;
 
    return(
      <div>
        <h1 className={css.h1}>Phonebook</h1>
        <Form onAddContact={this.handleAddContact} />
        <h2 className={css.h2}>Contacts</h2>
        <Filter />
        <ContactList contacts={contacts} />
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
    })
  ).isRequired,
};
