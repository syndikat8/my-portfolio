import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <a href="https://www.google.com/" className={styles.link}>Главная</a>
      <a href="https://www.google.com/" className={styles.link}>Скиллы</a>
      <a href="https://www.google.com/" className={styles.link}>Проекты</a>
      <a href="https://www.google.com/" className={styles.link}>Контакты</a>
    </div>
  );
}

export default NavMenu;
