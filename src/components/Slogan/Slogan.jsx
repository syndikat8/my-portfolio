import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <h2> Рассматриваю варианты удаленной работы </h2>
        <div>
        <button>Нанять меня</button>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
