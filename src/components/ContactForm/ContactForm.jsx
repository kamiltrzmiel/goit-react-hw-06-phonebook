import css from './contactForm.module.css';
import { Notify } from "notiflix";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddContact } from "redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const [form, setForm] = useState({
    name: "",
    number: "",
  });

  const handleForm = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };
  const { name, number } = form;

  const isInStorageContact = () => {
    const isExist = contacts.find(contact => contact.name === name);
    if (isExist) {
      Notify.failure("Position already exist!");
    };
    return !isExist;
  };

  const checkForm = () => {
    if (!name || !number) {
      Notify.failure("Fill all fields!");
      return false;
    };
    return isInStorageContact(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValForm = checkForm();
    if (!isValForm) {
      return;
    }
    dispatch(handleAddContact({ id: nanoid(), name, number }));
    Notify.success("Position was added!");
    setForm({ name: "", number: "" });
  };
  

  useEffect(() => {
    if (contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    };
  }, [contacts]);

    return (
      <form className={css.form} onSubmit={handleSubmit}>
            <input
            className={css.inputName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
            value={name}
            onChange={handleForm}
          />
          <input
            className={css.inputNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter phone number"
            value={number}
            onChange={handleForm}
          />
        <button className={css.addContactBtn} type="submit">Add contact</button>
      </form>
  ); 
};

export default ContactForm;