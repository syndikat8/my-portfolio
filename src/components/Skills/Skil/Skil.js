import React from 'react';
import styles from './Skil.module.css';
import Item from "../../Item/Item";

const Skil = (props) => {

  return (
    <div className={styles.skil}>
      <div className={styles.skilBackground}>
        {props.icon === null
          ? <img src={props.url} className={styles.item}/>
          : <Item size={props.size} icon={props.icon} className={styles.item}/>}
      </div>
      <h3> {props.name}</h3>
      <p>{props.description}</p>
    </div>
  );

}

export default Skil;
