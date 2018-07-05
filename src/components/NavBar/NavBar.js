import React, { Component } from 'react'
import NavLinks from './NavLinks/NavLinks'
import NavSearch from './NavSearch/NavSearch'
import './NavBar.css'

class NavBar extends Component {
  render () {
    return (
      <div className='nav-bar'>
        <NavLinks />
        <h4 className='logo'><i className='fas fa-kiwi-bird' /></h4>
        <NavSearch />
      </div>
    )
  }
}

export default NavBar
