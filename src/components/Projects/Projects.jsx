import React from 'react';
import styles from './Projects.module.css';
import Work from "./Work/Work";


function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>

        <div>
        <h2> Мои проекты </h2>
        </div>
        <div className={styles.allWorks}>
        <Work/>
        <Work/>

        </div>
      </div>
    </div>

  );
}

export default Projects;
