import React from "react";
import Form from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import FilterList from "../FilterList/FilterList";
import css from "./Phonebook.module.css";
export default function Phonebook() {
  return (
    <div className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      <h2 className={css.title}>Contacts</h2>
      <FilterList />
      <ContactList />
    </div>
  );
}
