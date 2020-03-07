import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>

        <h2> Контакты </h2>
        <form action="#">
          <div><input size="20" type="text"/></div>
          <div><input size="20" type="text"/></div>
          <div>
            <textarea name="" id="" cols="15" rows="15"></textarea>
          </div>
        </form>
        <div>
          <button>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
