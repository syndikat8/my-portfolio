import React from 'react';
import styles from './Skil.module.css';
import Item from "../../Item/Item";

const Skil = (props) => {

  return (
    <div className={styles.skil}>
      <div className={styles.skilBackground} >
      <Item size={props.size} icon={props.icon} className={props.className}/>
      </div>
      <h3> {props.name}</h3>
      <p>React — это JavaScript-библиотека для разработки пользовательского интерфейса.</p>
    </div>
  );

}

export default Skil;
