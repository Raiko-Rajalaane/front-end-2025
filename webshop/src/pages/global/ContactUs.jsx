
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const form = useRef();

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
      <label>Name:</label> <br />
      <input type="text" name="from_name" /> <br />
      <label>Email:</label> <br />
      <input type="email" name="from_email" /> <br />
      <label>Message:</label> <br />
      <textarea name="message" /> <br />
      <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default ContactUs
