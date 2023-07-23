import React from "react";
import PropTypes from 'prop-types';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import css from './ContactList.module.css';

export class ContactList extends React.Component {
    render() {
        const { contacts, onDeleteContact } = this.props;

        return (
            <ul className={css.contactList}>
                {contacts.map(contact => (
                    <ContactsItem
                        key={contact.id}
                        contact={contact}
                        onDeleteContact={onDeleteContact}
                    />
                ))}
            </ul>
        );
    }

    static propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            })
        ).isRequired,
        onDeleteContact: PropTypes.func.isRequired,
    };
}

