import css from './filter.module.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);

  return (
  <div className={css.filterWrapper}>
    <input className={css.inputFilter} type="text"
      name="filter"
      value={filterValue}
      placeholder="Find contacts"
      onChange={event => dispatch(filterContact(event.target.value))}
    />
  </div>  
  );
};

export default Filter;
