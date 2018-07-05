import React, { Component } from 'react'
import './Kwit.css'

const kwit = props => (
  <div className='kwit'>
    <div className='kwit-user'>
      <h4 className='kwit-user-name'>{props.name}</h4>
      <h4 className='kwit-user-tag'>{props.tag}</h4>
    </div>
    <div className='kwit-message'>
      <p className='kwit-message-text'>
        {props.kwit}
      </p>
    </div>
  </div>
)

export default kwit
