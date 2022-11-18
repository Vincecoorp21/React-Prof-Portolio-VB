import React from 'react';
import Picture from '../../assets/yo comic.png';
import '../About/About.css';

const About = () => {
  return (
    <section id='bio' /**style={{ backgroundImage: `url(${background})` }}*/>
      <ul>
        <li className='table-bio'>
          <div>
            <h1 className='table-title'>About Me</h1>
            <p className='text main-title project-top'>
              Product <span className='main-title-cap'>M</span>anager
              {/* If you have any doubt or question please do not hesitate to
                contact me! Working on very Hard to become a Fullstack
                Developer!!!! Come on, friends! */}
            </p>
            <p className='text text-sep'>
              Hi! I'm <span className='name-title'>Vicente</span>, I'm a Product
              Manager with 6 years of experience in an International
              Environtment...& now a FullStack Developer too. Check out my
              latest Projects. Let's connect!!!
            </p>
            <p>
              <a href='mailto:vibarcar@gmail.com' title="Let's GOOO">
                <button className='button-contact'>CONTACT ME</button>
              </a>
              <p className='text main-title'>
                FullStack <span className='main-title-cap'>D</span>eveloper
                {/* If you have any doubt or question please do not hesitate to
                contact me! Working on very Hard to become a Fullstack
                Developer!!!! Come on, friends! */}
              </p>
            </p>
          </div>
          <img src={Picture} alt='Vince photo' className='pictureBio' />
        </li>
      </ul>
    </section>
  );
};

export default About;
