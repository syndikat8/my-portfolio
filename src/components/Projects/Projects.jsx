import React from 'react';
import styles from './Projects.module.css';
import Work from "./Work/Work";


function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>

        <div className={styles.myProjects}>
        <h2 className={styles.head}> Мои <span>проекты</span> </h2>
          <div className={styles.line}></div>
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
