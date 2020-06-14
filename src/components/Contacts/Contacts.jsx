import React from 'react';
import styles from './Contacts.module.css';
import Fade from 'react-reveal/Fade';
import ContactsFormRedux from "./ContactsForm/ContactsForm";
import axios from "axios";


const Contacts = () => {

  const onSubmit = (formData) => {
    debugger
    console.log(formData)

    axios.post("http://localhost:3005/sendMessage", {
      name: formData.name,
      contacts: formData.contacts,
      title: formData.title,
      messages: formData.messages,
    }).
    then(() => {
      alert("Your message was")
      }
    )

  }

  return (
    <div id="contacts" className={styles.contacts}>
      <div className={styles.container}>
        <h2> Контакты </h2>
        <div className={styles.contactMain}>
          <Fade left>
            <div className={styles.contactMainElement}>
              <h3>Минск, БЕЛАРУСЬ</h3>
              <a href="https://mail.google.com/">k.syndikat@gmail.com</a>
              <p>+375 29 26-41-378</p>
            </div>
            <ContactsFormRedux onSubmit={onSubmit}/>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
