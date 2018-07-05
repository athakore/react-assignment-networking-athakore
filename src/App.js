import React, { Component } from 'react'

import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavBar />
        <Home />
      </div>
    )
  }
}

export default App
