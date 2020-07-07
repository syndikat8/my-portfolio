import React from 'react';
import styles from './Projects.module.css';
import Work from "./Work/Work";
import Fade from 'react-reveal/Fade';
import social from "./../../assets/bacground-projects/social.jpg"
import todolist from "./../../assets/bacground-projects/todolist.png"
import counter from "./../../assets/bacground-projects/counter.png"

class Projects extends React.Component {

  state = {
    divStyle: [
      {background: social, title: "Social Network", url: "https://syndikat8.github.io/Social_Network/"},
      {background: todolist, title: "TodoList", url: "https://syndikat8.github.io/todolist01/"},
      {background: counter, title: "Сounter", url: "https://syndikat8.github.io/counter/"},
    ]
  }

  render() {
    let project = this.state.divStyle.map((p, index) => <Work url={p.url} background={p.background} key={index} title={p.title}/>)
    return (
      <div id="projects" className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.myProjects}>
            <h2 className={styles.head}> Мои <span>проекты</span></h2>
            <div className={styles.line}></div>
          </div>
          <Fade left>
            <div className={styles.allWorks}>
              {project}
            </div>
          </Fade>
        </div>
      </div>

    );
  }
}

export default Projects;
