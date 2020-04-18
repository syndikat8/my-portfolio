import React from 'react';
import styles from './NavMenu.module.css';


function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <a href="#main" className={styles.link}>Главная</a>
      <a href="#skills" className={styles.link}>Скиллы</a>
      <a href="#projects" className={styles.link}>Проекты</a>
      <a href="#contacts" className={styles.link}>Контакты</a>
    </div>
  );
}

export default NavMenu;
