import React, { useState } from 'react';
import './Home.css';
import Header from './Header';

function Home() {



  return (
    <div className='home-container'>
      <section className='section' id='section-1-home'>
  <div className='background-container'></div> {/* Background container */}

  <div className='header-menu'>
    <Header />
  </div>

  <img
    className='img-treva-2010'
    src='https://images.squarespace-cdn.com/content/v1/5d654ba7981f16000104a5a7/1567694669834-W8JGAFWFRU90TTGA5N7U/treva+white.png?format=1000w'
    alt='Treva Logo'
  />

  <input
    type='image'
    onClick={() => document.getElementById('section-2-home').scrollIntoView({ behavior: 'smooth' })}
    className='down-arrow'
    width='64'
    height='64'
    src='https://img.icons8.com/pastel-glyph/64/FFFFFF/forward.png'
    alt='forward'
  />
</section>


      <section className='section' id='section-2-home'>
        
        <h2>TREVA RESTAURANT & BAR</h2>

        <h3>Treva is inspired by the cuisine of the Central and Northern regions of Italy. Using only the freshest and finest in-season ingredients, dishes are hand-crafted daily and served in warm and convivial atmosphere.</h3>

        <a className='button-delivery'>Order Delivery</a>
      </section>

      <section className='section' id='section-3-home'>
        <h1>RESERVATIONS</h1>
        <h2>We are excited to announce we are now using Resy for all reservations at our restaurants.  This will offer prime time reservations exclusively for DORO Restaurant Group.</h2>
        <img src='https://images.squarespace-cdn.com/content/v1/5d654ba7981f16000104a5a7/1567694999081-1XISF7MDG0XEXTYJHBIA/resy.png?format=500w'></img>
      </section>
      
    </div>
  );
}

export default Home;
