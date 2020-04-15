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
      {name: faTelegram, className:styles.item, size: "2x", id: "https://t.me/Xustler"},
      {name: faVk, className:styles.item, size: "2x", id: "https://vk.com/dimamatus"},
      {name: faInstagram, className:styles.item, size: "2x", id: "http://instagram.com/dimamatus"},
      {name: faGithub, className:styles.item, size: "2x", id: "https://github.com/syndikat8"} ,
      {name: faGoogle, className:styles.item, size: "2x", id: "https://mail.google.com/"} ,
    ]
  }

  render() {
     let  itemsFooter = this.state.faItemFooter.map(it =>  <a href={it.id}><Item className={it.className} faItem={it.name} size={it.size}/></a> )
    return (
      <div className={styles.footer}>
        <div className={styles.container}>
          <h4>© Матусик Дмитрий 2020. </h4>
          <div className={styles.items}>

            {itemsFooter}
          </div>

        </div>
      </div>

    );
  }
}

export default Footer;
