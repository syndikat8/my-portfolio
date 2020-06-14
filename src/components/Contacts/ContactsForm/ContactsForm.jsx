import React from 'react';
import styles from './../Contacts.module.css';
import {Field, reduxForm} from "redux-form";


const ContactsForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={styles.formatArea}>
      <div className={styles.formatAreaElement}>
        <Field
          placeholder="Имя"
          name="name"
          component="input"/>
        <Field
          placeholder="Контакты"
          name="contacts"
          component="input"/>
      </div>
      <Field
        placeholder="Заголовок (необязательно)"
        name="title"
        component="input"/>
      <Field
        name="messages"
        placeholder="Сообщение"
        component="textarea"/>
      <button>Отправить</button>
    </form>
  );
}

const ContactsFormRedux = reduxForm({
  form: "contacts"
})(ContactsForm)

export default ContactsFormRedux;
