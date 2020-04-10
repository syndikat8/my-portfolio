import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <h2> Контакты </h2>
        <form className={styles.formatArea}>
          <input placeholder="ФИО" type="text"/>
          <input placeholder="Контакты" type="text"/>
          <textarea placeholder="Сообщение" ></textarea>
        </form>
        <button>Отправить</button>
      </div>
    </div>
  );
}

export default Contacts;
