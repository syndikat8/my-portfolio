import React from 'react';
import styles from './Skills.module.css';
import Skil from "./Skil/Skil";
import {faCss3, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';

class Skills extends React.Component {

  state = {
    faItem: [
      {icon: faJs, size: "5x", name: "JAVASCRIPT"},
      {icon: faReact, size: "5x", name: "REACT"},
      {icon: faReact, size: "5x", name: "REDUX"},
      {icon: faHtml5, size: "5x", name: "HTML"},
      {icon: faCss3, size: "5x", name: "CSS"},
    ]
  }


  render() {

    let Skill = this.state.faItem.map(it => <Skil name={it.name} icon={it.icon}
                                                  size={it.size}/>)

    return (
      <div className={styles.skills}>
        <div className={styles.container}>
          <div className={styles.mySkills}>
            <h2 className={styles.head}> Мои <span> скилы</span></h2>
            <div className={styles.line}></div>
          </div>
          <Fade left>
            <div className={styles.allSkil}>
              {Skill}
            </div>
          </Fade>
        </div>
      </div>

    );
  }
}

export default Skills;
