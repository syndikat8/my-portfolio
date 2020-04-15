import React from 'react';
import styles from './Footer.module.css';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faVk} from '@fortawesome/free-brands-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import Item from "../Item/Item";


class Footer extends React.Component {

  state = {
    faItemFooter: [
      {name: faTelegram, className:styles.item, size: "2x"},
      {name: faVk, className:styles.item, size: "2x"},
      {name: faInstagram, className:styles.item, size: "2x"},
      {name: faGithub, className:styles.item, size: "2x"} ,
      {name: faGoogle, className:styles.item, size: "2x"} ,
    ]
  }

  render() {
     let  itemsFooter = this.state.faItemFooter.map(it => <Item className={it.className} faItem={it.name} size={it.size}/> )
    return (
      <div className={styles.footer}>
        <div className={styles.container}>
          <h3> Матусик Дмитрий </h3>
          <div className={styles.items}>
            {itemsFooter}
          </div>
          <h5>© 2020 Все права защищены </h5>
        </div>
      </div>

    );
  }
}

export default Footer;
