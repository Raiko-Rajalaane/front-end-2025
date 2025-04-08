
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

function ContactUs() {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xz2pz8p', 'template_2do554b', form.current, {
        publicKey: 'WImB7fF7cSl_aatp5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
      <label>{t("contact.name")}</label> <br />
      <input type="text" name="from_name" /> <br />
      <label>{t("contact.email")}</label> <br />
      <input type="email" name="from_email" /> <br />
      <label>{t("contact.message")}</label> <br />
      <textarea name="message" /> <br />
      <input type="submit" value={t("contact.send")} />
      </form>
    </div>
  )
}

export default ContactUs
