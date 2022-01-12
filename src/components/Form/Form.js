import React from "react";
import { useState } from "react";
import css from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../contacts/contactsAction";

export default function Form() {
  const [state, setState] = useState({ name: "", number: "" });
  const dispatch = useDispatch()

  const items = useSelector(state => state.contacts.items);
  const { name, number } = state;

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (
      items.some((item) => item.name.toLowerCase() === state.name.toLowerCase())
    ) {
      alert("УЖЕ ЕСТЬ ТАКОЙ КОНТАКТ");
      setState({ ...state, name: '' });
    } else {
      dispatch(addContact(state))
      setState({name: '', number: ''})
    }
  };
  return (
    <form onSubmit={onHandleSubmit} className={css.form}>
      <div>
        <label className={css.label}>
          <span className={css.span}>Name</span>
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          <span className={css.span}>Number</span>
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={onInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button type="submit" className={css.btn}>
        ДОБАВИТЬ КОНТАКТ
      </button>
    </form>
  );
}
