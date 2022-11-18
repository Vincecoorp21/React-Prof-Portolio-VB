import React from 'react';
import './Color.css';

const Color = () => {
  // document.querySelector('.light').addEventListener('click', partylight);
  // document.querySelector('.dark').addEventListener('click', partydark);
  // document.querySelector('.darker').addEventListener('click', partydarker);

  // if (first) {
  //   first?.addEventListener('click', partylight);
  // }

  // function partylight() {
  //   document.querySelector('body').style.backgroundColor = '#E4E9BE';
  //   document.querySelector('#contact').style.backgroundColor = 'white';
  // }
  // function partydark() {
  //   document.querySelector('body').style.backgroundColor = '#DDDDDD';
  //   document.querySelector('#contact').style.backgroundColor = 'white';
  // }
  // function partydarker() {
  //   document.querySelector('body').style.backgroundColor = '#525E75';
  //   document.querySelector('#contact').style.backgroundColor = 'white';
  // }

  return (
    <article>
      <h2 className='table-title' style={{ textAlign: 'center' }}>
        Add some color to your life
      </h2>
      <div className='colorgame'>
        <button className='light btn' id='light'>
          Light
        </button>
        <button className='dark btn'>Dark</button>
        <button className='darker btn'>Purple</button>
      </div>
    </article>
  );
};

export default Color;
