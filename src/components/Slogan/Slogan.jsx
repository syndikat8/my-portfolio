import React from 'react';
import styles from './Slogan.module.css';
import Zoom from 'react-reveal/Zoom';
function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <Zoom left>
        <h2> Рассматриваю варианты удаленной работы </h2>
        </Zoom>
        <button>Нанять меня</button>
      </div>
    </div>
  );
}

export default Slogan;
