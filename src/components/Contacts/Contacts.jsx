import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <h2> Контакты </h2>
        <div className={styles.contactMain}>
          <div className={styles.contactMainElement}>
            <h3>Минск, БЕЛАРУСЬ</h3>
            <a href="https://mail.google.com/">k.syndikat@gmail.com</a>
            <p>+375 29 26-41-378</p>
          </div>
          <form className={styles.formatArea}>
            <div className={styles.formatAreaElement}>
              <input placeholder="Имя" type="text"/>
              <input placeholder="Контакты" type="text"/>
            </div>
            <input placeholder="Заголовок (необязательно)" type="text"/>
            <textarea placeholder="Сообщение"></textarea>
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
