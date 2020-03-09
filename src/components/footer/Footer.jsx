import React from 'react';
import styles from './Footer.module.css';


function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h2> Матусик Дмитрий </h2>
         <div>
           <a className={styles.item}>111</a>
           <a className={styles.item}>211</a>
           <a className={styles.item}>311</a>
           <a className={styles.item}>411</a>
           <a className={styles.item}>511</a>
           <a className={styles.item}>611</a>


         </div>
        <h3>© 2020 Все права защищены </h3>
      </div>
    </div>
  );
}

export default Footer;
