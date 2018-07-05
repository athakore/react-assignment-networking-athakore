import React, { Component } from 'react'
import './NavSearch.css'

class NavSearch extends Component {
  render () {
    return (
      <div className='nav-search'>
        <ul className='search-list'>
          <li className='search-item'>
            <input
              type='text'
              className='search'
              defaultValue='Search Kwitter'
            />
            <button type='button' className='search-button'>
              <i className='fas fa-search' />
            </button>
          </li>
          <li className='search-item'>
            <div className='profile-image' />
          </li>
          <li className='search-item'>
            <button type='button' className='kwit-button'>Kwit</button>
          </li>

        </ul>
      </div>
    )
  }
}

export default NavSearch
