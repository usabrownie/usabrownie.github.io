import React from 'react';
// { useState }

import config from '../../config';
export default function Footer() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleName = event => {
  //   console.log(event.target.value);
  //   setName(event.target.value);
  // };

  // const handleEmail = event => {
  //   console.log(event.target.value);
  //   setEmail(event.target.value);
  // };

  // const handleMessage = event => {
  //   console.log(event.target.value);
  //   setMessage(event.target.value);
  // };
  // const onSubmit = () => {};
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <p>
          Feel free to contact me if you'd like to chat! Given the flexibility
          of my current education plan, I am open to full-time and part-time
          opportunities.
        </p>
        <form method="post" action="https://formspree.io/mwkrwoby">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                // value={name}
                // onChange={event => handleName(event)}
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="_replyto"
                id="email"
                // onChange={event => handleEmail(event)}
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                // onChange={event => handleMessage(event)}
              ></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>
        <ul className="contact">
          {/* <li className="fa-home">{config.address}</li>

          <li className="fa-phone">{config.phone}</li> */}

          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
        </ul>
        <ul className="copyright">
          <li>&copy; Solid State. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
