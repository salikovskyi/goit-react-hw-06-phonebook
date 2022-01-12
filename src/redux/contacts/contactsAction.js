import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("addContact", (contact) => ({
  payload: {
    ...contact,
    id: uuidv4(),
  },
}));

const removeContact = createAction("removeContact");

const filterContact = createAction("filterContact");

export { addContact, removeContact, filterContact };
