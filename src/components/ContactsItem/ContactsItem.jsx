import React from "react";
import PropTypes from 'prop-types';
import css from './ContactItem.module.css'

export class ContactsItem extends React.Component {
    handleDeleteContact = () => {
        const { contact, onDeleteContact } = this.props;
        onDeleteContact(contact.id);
    };

    render() {
        const { contact } = this.props;
        const { onDeleteContact } = this.props;

        return (
            <li className={css.classItem}>
                <span className={css.name}>{contact.name}</span> :  <span className={css.number}>{contact.number}</span>;
                <button onClick={() => this.handleDeleteContact(contact.id)} className={css.button}>Delete</button>
            </li>
        );
    };

    static propTypes = {
        contact: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
        onDeleteContact: PropTypes.func.isRequired,
    };
}