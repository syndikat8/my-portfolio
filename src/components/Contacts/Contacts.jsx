import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>

        <h2> Контакты </h2>
        <form action="#">
          <div><input placeholder="ФИО" type="text"/></div>
          <div><input placeholder="Контакты" type="text"/></div>
          <div>
            <textarea name="" id="" cols="30" rows="15"></textarea>
          </div>
        </form>
          <button>Отправить</button>
      </div>
    </div>
  );
}

export default Contacts;
