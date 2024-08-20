import React from 'react'
import './Menu.css'
import Header from './Header'

function Menu() {
  return (

    <div className='menu-container'>

        <a className='button-back' href='/'>
          <img width="64" height="64" src="https://img.icons8.com/laces/64/000000/circled-left-2.png" alt="circled-left-2"/>
        </a>

        <h1>Menu</h1>

        <div className='menu-lunch'>
            <div className='menu-card'>
            <h3>BRUNCH</h3>
            <img></img>
            </div>

            <div className='menu-card'>
            <h3>LUNCH</h3>
            <img></img>
            </div>

            <div className='menu-card'>
            <h3>DINNER</h3>
            <img></img>
            </div>
        </div>
    </div>
  )
}

export default Menu