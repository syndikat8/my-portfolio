import React from 'react';
import styles from './Skills.module.css';
import Skil from "./Skil/Skil";
import {faCss3, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons';


class Skills extends React.Component {

  state = {
    faItem: [
      {icon: faJs, className:styles.item, size: "5x", name: "JAVASCRIPT"},
      {icon: faReact, className:styles.item, size: "5x", name: "REACT"},
      {icon: faReact, className:styles.item, size: "5x", name: "REDUX"},
      {icon: faHtml5, className:styles.item, size: "5x", name: "HTML"},
      {icon: faCss3, className:styles.item, size: "5x", name: "CSS"},
    ]
  }


  render() {

    let  Skill = this.state.faItem.map(it => <Skil name={it.name} className={it.className} icon={it.icon} size={it.size}/>  )

    return (
      <div className={styles.skills}>
        <div className={styles.container}>
          <div className={styles.mySkills}>
            <h2 className={styles.head}> Мои <span> скилы</span> </h2>
            <div className={styles.line}></div>
          </div>
          <div className={styles.allSkil}>
            {Skill}
          </div>
        </div>
      </div>

    );
  }
}

export default Skills;
