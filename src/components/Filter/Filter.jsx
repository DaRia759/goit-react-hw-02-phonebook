import React from "react";
import PropTypes from 'prop-types';
import css from './Filter.module.css'

export class Filter extends React.Component {
    render() {
        const { value, onChange } = this.props;
    
        return (
            <label className={css.label}>
                <span className={css.span}>Find contacts by name</span>
                <input className={css.input}
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Search contacts"
                />
            </label>
        );
    }

    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired,
    };
}