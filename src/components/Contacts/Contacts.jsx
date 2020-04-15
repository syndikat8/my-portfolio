import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <h2> Контакты </h2>
        <div className={styles.contactMain}>
          <div className={styles.contactMainElement} >
            <h3>Минск, БЕЛАРУСЬ</h3>
            <a href="k.syndikat@gmail.com">k.syndikat@gmail.com</a>
            <p>+375 29 2-64-13-78</p>
          </div>
        <form className={styles.formatArea}>
          <input placeholder="ФИО" type="text"/>
          <input placeholder="Контакты" type="text"/>
          <textarea placeholder="Сообщение" ></textarea>
        </form>
        </div>
        <button>Отправить</button>
      </div>
    </div>
  );
}

export default Contacts;
