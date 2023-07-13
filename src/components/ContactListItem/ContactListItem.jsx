import css from './contactListItem.module.css';
import { Notify } from 'notiflix';
import React from 'react';
import { useDispatch } from 'react-redux';
import { handleDelContact } from 'redux/contactsSlice';

const ContactListItem = ({id, name, number}) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactListitem}>
     <span>{name}: {number}</span>
      <button className={css.delBtn} type="button" onClick={() => 
        dispatch(handleDelContact(id), Notify.success('Position was deleted.'))}>Delete</button>
    </li>
  );
};

export default ContactListItem;






