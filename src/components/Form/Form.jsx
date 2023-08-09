import React from "react";
import PropTypes from 'prop-types';
import css from './Form.module.css';

class Form extends React.Component {
    state = {
        name: '',
        number: '',
    };
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
    handleFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };
    reset = () => {
        this.setState({ name: '', number: '' });
    };


    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit} className={css.form}>
                <label className={css.label}><span className={css.span}>Name</span>
                    <input className={css.input}
                        type="text"
                        value={name}
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                    />
                </label>
                <label className={css.label}><span className={css.span}>Number</span>
                    <input className={css.inputNumber}
                        type="tel"
                        value={number}
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit" className={css.button}>Add contact</button>
            </form>
        );
    }
}
Form.propTypes = {
        handleFormSubmit: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired,
};
    
export default Form;
