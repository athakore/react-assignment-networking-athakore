import React, { Component } from 'react'
import './DashRight.css'

class DashRight extends Component {
  render () {
    return (
      <div className='dash-right'>
        <div className='who-to-follow'>
          <div className='who-title'>
            <h3 className='display-name'>Who to follow</h3>
          </div>
          <div className='who-content'>
            <div className='who'>
              <h4 className='who-name'>Dis Boi</h4>
              <h4 className='who-tag'>@disboi43</h4>
              <button className='follow' type='button'>Follow</button>
            </div>
            <div className='who'>
              <h4 className='who-name'>Dat Boi</h4>
              <h4 className='who-tag'>@dat_boi6969</h4>
              <button className='follow' type='button'>Follow</button>
            </div>
            <div className='who'>
              <h4 className='who-name'>Flex Atomfist</h4>
              <h4 className='who-tag'>@FlexAtomfist</h4>
              <button className='follow' type='button'>Follow</button>
            </div>
          </div>
        </div>
        <div className='footer' />
      </div>
    )
  }
}

export default DashRight
