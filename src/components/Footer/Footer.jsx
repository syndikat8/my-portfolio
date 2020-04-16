import React from 'react';
import styles from './Footer.module.css';
import {faGithub, faGoogle, faInstagram, faTelegram, faVk} from '@fortawesome/free-brands-svg-icons';
import Item from "../Item/Item";


class Footer extends React.Component {

  state = {
    faItem: [
      {icon: faTelegram, className:styles.item, size: "2x", id: "https://t.me/Xustler"},
      {icon: faVk, className:styles.item, size: "2x", id: "https://vk.com/dimamatus"},
      {icon: faInstagram, className:styles.item, size: "2x", id: "http://instagram.com/dimamatus"},
      {icon: faGithub, className:styles.item, size: "2x", id: "https://github.com/syndikat8"} ,
      {icon: faGoogle, className:styles.item, size: "2x", id: "https://mail.google.com/"} ,
    ]
  }

  render() {
     let  itemsFooter = this.state.faItem.map(it =>  <a href={it.id}><Item className={it.className} icon={it.icon} size={it.size}/></a> )
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
