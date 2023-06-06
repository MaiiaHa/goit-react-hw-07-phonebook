import { createAction } from '@reduxjs/toolkit';
//----------------------
export const searchContacts = createAction('contacts/searchContacts');
export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
//----------------------
// export const searchContacts = input => {
//   return {
//     type: 'contacts/searchContacts',
//     payload: input,
//   };
// };

// export const addContact = ({ id, name, number }) => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id,
//       name,
//       number,
//     },
//   };
// };

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };
