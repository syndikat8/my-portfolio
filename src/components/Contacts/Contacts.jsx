import React from 'react';
import styles from './Contacts.module.css';
import Fade from 'react-reveal/Fade';
import ContactsFormRedux from "./ContactsForm/ContactsForm";
import axios from "axios";


class Contacts extends React.Component {

  state = {
    behold: false
  }

  render() {

    const onSubmit = (formData) => {
      axios.post("https://smpt-nodejs-server.herokuapp.com/sendMessage", {
        name: formData.name,
        contacts: formData.contacts,
        title: formData.title,
        messages: formData.messages,
      }).then(() => {
        this.setState({behold: true})
        }
      )
    }

    const onBeholdChange = () => {
      this.setState({behold: false})
    }

    return (
      <div id="contacts" className={styles.contacts}>
        <div className={styles.container}>
          <h2> Контакты </h2>
          {this.state.behold &&
            <span
              onPointerEnter={onBeholdChange}
              className={styles.messageForm}>Cообщение отправлено! Скоро свяжусь с Вами:)
          </span>
          }

          <div className={styles.contactMain}>
            <Fade left>
              <div className={styles.contactMainElement}>
                <h3>Минск, БЕЛАРУСЬ</h3>
                <a href="https://mail.google.com/">k.syndikat@gmail.com</a>
                <p>+375 29 26-41-378</p>
              </div>
              <ContactsFormRedux onSubmit={onSubmit}/>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
