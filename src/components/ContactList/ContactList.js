import css from "./ContactList.module.css";
import React from "react";
import { removeContact } from "../../contacts/contactsAction";
import { useSelector, useDispatch } from "react-redux";

export default function ContactList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const deleteContact = (id) => dispatch(removeContact(id));

  const contacts = items.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))


  return (
    <ul className={css.contactlist}>
        {contacts.map(({ id, name, number }) => (
      <li className={css.item} key={id}>
        <p className={css.name}>{name}:</p>
        <p className={css.number}>{number}</p>
        <button
        onClick={() => deleteContact(id)}
          className={css.btn}
          type="button"
        >
         СТЕРЕТЬ НАХЕР
        </button>
      </li>
    ))}
    </ul>
    )
}
