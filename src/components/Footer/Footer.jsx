import React from 'react';
import styles from './Footer.module.css';
import {faGithub, faGoogle, faInstagram, faTelegram, faVk} from '@fortawesome/free-brands-svg-icons';
import Item from "../Item/Item";


class Footer extends React.Component {

  state = {
    faItem: [
      {icon: faTelegram, className:styles.item, size: "2x", url: "https://t.me/Xustler"},
      {icon: faVk, className:styles.item, size: "2x", url: "https://vk.com/dimamatus"},
      {icon: faInstagram, className:styles.item, size: "2x", url: "http://instagram.com/dimamatus"},
      {icon: faGithub, className:styles.item, size: "2x", url: "https://github.com/syndikat8"} ,
      {icon: faGoogle, className:styles.item, size: "2x", url: "https://mail.google.com/"} ,
    ]
  }

  render() {
     let  itemsFooter = this.state.faItem.map((it, index) =>  <a href={it.url}><Item className={it.className} key={index} icon={it.icon} size={it.size}/></a> )
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
