import React from 'react';
import styles from './Projects.module.css';
import Work from "./Work/Work";


class Projects extends React.Component {

  state = {
    divStyle: [
      {background: "https://ax.digital/content/images/size/w2000/2018/08/stupro-virtuale2jpg.jpg", title: "Social Network"},
      {background: "https://miro.medium.com/max/2732/1*VTKsiByHMcWDIxpFawp4fg.png", title: "TodoList"},
      {background: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD0CDEGFtVChb8V00tcX0pRvNgnrWurEGhjWLNZR5jLQO9fseu&usqp=CAU", title: "Сounter"},
    ]
  }

  render() {
 let project = this.state.divStyle.map( p =>  <Work background={p.background} title={p.title} />)
    return (
      <div className={styles.projects}>
        <div className={styles.container}>

          <div className={styles.myProjects}>
            <h2 className={styles.head}> Мои <span>проекты</span></h2>
            <div className={styles.line}></div>
          </div>
          <div className={styles.allWorks}>
            {project}
          </div>
        </div>
      </div>

    );
  }
}

export default Projects;
