import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div class="scroll-watcher"></div>

        <div className='header'>
            <img
                className='company-logo'
                src='https://images.squarespace-cdn.com/content/v1/5d654ba7981f16000104a5a7/1567694647201-P2CPUD3CLJE0HE1TCC9K/t+white.png?format=500w'
                alt="company logo"
            />
            <nav className='nav-links'>
                <Link to="/">HOME</Link>

                <div className='dropdown'>
                <Link className='dropbtn' to="/Menu">MENU</Link>
                  <div class="dropdown-content">
                    <a href="#">BRUNCH</a>
                    <a href="#">LUNCH</a>
                    <a href="#">DINNER</a>
                    <a href="#">DRINKS</a>
                    <a href="#">DESSERT</a>


                  </div>
                  </div>


                <Link to="https://www.grubhub.com">ORDER NOW</Link>
                <Link to="/about">CATERING</Link>
                <Link to="/about">TEAM</Link>
                <Link to="/about">CONTACT</Link>

            </nav>
        </div>
    </div>
  )
}

export default Header