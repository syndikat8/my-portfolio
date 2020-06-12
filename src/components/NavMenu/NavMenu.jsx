import React from 'react';
import styles from './NavMenu.module.css';
import {Link} from "react-scroll";

function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <Link
        className={styles.link}
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Главная
      </Link>
      <Link
        className={styles.link}
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Скиллы
      </Link>
      <Link
        className={styles.link}
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Проекты
      </Link>
      <Link
        className={styles.link}
        activeClass="active"
        to="contacts"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Контакты
      </Link>
    </div>
  );
}

export default NavMenu;
