import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import {addContact, removeContact, filterContact} from './contactsAction'

const items = createReducer([], {
  [addContact]: (state, {payload}) => [...state, payload],
  [removeContact]: (state, {payload}) => state.filter(({id}) => id !== payload)
})

const filter = createReducer('', {
  [filterContact]: (state, {payload}) => payload
});

const contactReducer = combineReducers({
  items,
  filter,
})

export default contactReducer;