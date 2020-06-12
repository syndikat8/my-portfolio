import React from 'react';
import styles from './Main.module.css';
import Zoom from 'react-reveal/Zoom';

function Main() {
  return (
    <div id="home" className={styles.main}>
      <div className={styles.container}>
        <Zoom left>
        <div className={styles.greeting}>
          <span >Привет!</span>
          <span>Я Дмитрий <span>Матусик</span></span>
          <h1>Front-end разработчик</h1>
        </div>
      </Zoom>
        <div className={styles.photo}>
          <div className={styles.image}></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
