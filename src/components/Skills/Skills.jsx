import React from 'react';
import styles from './Skills.module.css';
import Skil from "./Skil/Skil";
import {faCss3, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import typesctipt from './../../assets/skills/typescript.png'
import redux from './../../assets/skills/redux.png'

class Skills extends React.Component {

  state = {
    faItem: [
      {
        icon: faJs,
        size: "5x",
        name: "JAVASCRIPT",
        description: "JS — язык программирования, который добавляет интерактивность на веб-сайт."
      },
      {
        icon: faReact,
        size: "5x",
        name: "REACT",
        description: "React — JavaScript-библиотека для разработки пользовательского интерфейса."
      },
      {
        url: redux,
        icon: null,
        size: "5x",
        name: "REDUX",
        description: "Redux — библиотека предназначенная для управления состоянием приложения."
      },
      {
        icon: faHtml5,
        size: "5x",
        name: "HTML",
        description: "HTML — стандартизированный язык разметки документов."
      },
      {
        icon: faCss3,
        size: "5x",
        name: "CSS",
        description: "CSS — язык описания внешнего вида документа."
      },
      {
        url: typesctipt,
        icon: null,
        size: "5x",
        name: "TYPESCRIPT",
        description: "TYPESCRIPT — надмножество Javascript с опциональной статической типизацией."
      },
    ]
  }


  render() {

    let Skill = this.state.faItem.map((it, index) => <Skil name={it.name}
                                                           url={it.url}
                                                           key={index}
                                                           description={it.description}
                                                           icon={it.icon}
                                                           size={it.size}/>)

    return (
      <div id="skills" className={styles.skills}>
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
