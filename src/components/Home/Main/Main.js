import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions/'
import './Main.css'
import Kwit from './Kwit/Kwit'

class Main extends Component {
  addKwit = content => {
    this.props.createKwit(this.props.kwits, content)
  }

  deleteKwit = id => {
    this.props.deleteKwit(this.props.kwits, id)
  }

  componentDidMount () {
    this.props.getKwits()
  }

  render () {
    return (
      <div className='main'>
        <div className='status'>
          <div className='status-user-img' />
          <div className='status-text-box'>
            <input
              type='text'
              className='update-status'
              defaultValue="What's happening?"
            />
            <button type='button' className='kwitter-button'>
              <i className='fas fa-kiwi-bird' />
            </button>
          </div>
        </div>
        <div className='kwitter-verse'>
          {this.props.kwits.map(kwit => (
            <Kwit name={kwit.name} tag={kwit.tag} kwit={kwit.kwit} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  kwits: state.kwits
})

const mapDispatchToProps = dispatch => ({
  getKwits: () => dispatch(actionCreators.getKwitsAsync()),
  createKwit: (kwits, content) =>
    dispatch(actionCreators.createKwitAsync(kwits, content)),
  deleteKwit: (kwits, id) =>
    dispatch(actionCreators.deleteKwitAsync(kwits, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
