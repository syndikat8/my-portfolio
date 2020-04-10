import React from 'react';
import styles from './Footer.module.css';


function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h3> Матусик Дмитрий </h3>
         <div className={styles.items}>
          <div><a>111</a> </div>
          <div><a>111</a> </div>
          <div><a>111</a> </div>
          <div><a>111</a> </div>
          <div><a>111</a> </div>
          <div><a>111</a> </div>
          <div><a>111</a> </div>
         </div>
        <h5>© 2020 Все права защищены </h5>
      </div>
    </div>
  );
}

export default Footer;
