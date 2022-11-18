import React from 'react';
import './Contact.css';
import { FaTwitter } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact'>
      <h2 className='title-h2'>
        Let's Work <span>together</span>
      </h2>
      <p>How do you take your coffee?</p>
      <nav>
        <a href='https://twitter.com/VinceTrend' target='_blank'>
          <FaTwitter />
          Twitter
        </a>

        <a
          href='mailto:trendvince@gmail.com
'
          target='_blank'
        >
          <FaEnvelope />
          Email
        </a>
        <a href='https://www.linkedin.com/in/vibarcar/' target='_blank'>
          <FaLinkedinIn />
          Linkedin
        </a>
        <a
          id='profile-link'
          target='_blank'
          href='https://github.com/Vincecoorp21'
        >
          <FaGithub /> Git-Hub Profile
        </a>
      </nav>
    </section>
  );
};

export default Contact;
