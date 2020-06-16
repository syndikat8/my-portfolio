import React from 'react';
import styles from './Slogan.module.css';
import Zoom from 'react-reveal/Zoom';
import Button from "../Button/Button";
function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <Zoom left>
        <h2> Рассматриваю варианты удаленной работы </h2>
        </Zoom>
        <Button name="Нанять меня" />
      </div>
    </div>
  );
}

export default Slogan;
