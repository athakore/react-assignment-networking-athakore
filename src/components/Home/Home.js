import React, { Component } from 'react'
import DashLeft from './DashLeft/DashLeft'
import Main from './Main/Main'
import DashRight from './DashRight/DashRight'
import './Home.css'

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <DashLeft />
        <Main />
        <DashRight />
      </div>
    )
  }
}

export default Home
