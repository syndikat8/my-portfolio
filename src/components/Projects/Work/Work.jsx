import React from 'react';
import styles from './Work.module.css';

const Work = (props) => {

  const divStyle = {
    backgroundImage: "url("+ props.background +")",
  }

  return (
    <div style={divStyle} className={styles.work}>
      <a className={styles.drop} href="">
        <div className={styles.dropItem}>{props.title}</div>
      </a>
    </div>
  );
}

export default Work;
