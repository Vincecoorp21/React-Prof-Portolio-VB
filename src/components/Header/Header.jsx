import React, { version } from 'react';
import './Header.css';
import wave from '../../assets/Wave.svg';
import yopic from '../../assets/yo comic.png';

const Header = props => {
  return (
    <div
      className='header-app'
      style={{ backgroundImage: `url(${wave})` }}
      /**style={{
         backgroundImage:
          'url(' +
          'https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350' +
          ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}*/
    >
      <div>
        <img src={yopic} style={{ width: '60px', borderRadius: '50%' }}></img>
      </div>
      <ul>
        <li>
          <a href='#bio' className='header-link'>
            About Me
          </a>
        </li>
        <li>
          <a href='#projects' className='header-link'>
            Projects
          </a>
        </li>
        <li>
          <a href='#contact' className='header-link'>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
