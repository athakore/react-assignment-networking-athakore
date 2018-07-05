import React, { Component } from 'react'
import './NavLinks.css'

class NavLinks extends Component {
  render () {
    return (
      <nav className='nav-links'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href='#'><i className='fas fa-home' />Home</a>
          </li>
          <li className='nav-item'>
            <a href='#'><i className='far fa-sun' />Moments</a>
          </li>
          <li className='nav-item'>
            <a href='#'><i className='far fa-flag' />Notifications</a>
          </li>
          <li className='nav-item'>
            <a href='#'><i className='far fa-comments' />Messages</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavLinks
