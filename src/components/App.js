import './App.css'

import { Component } from 'preact'
import StopLinePanel from './StopLinePanel'

export default class App extends Component {
  componentDidMount () {
    const stopLines = parseLocationHash(window.location.hash)
    if (stopLines) {
      this.setState({
        stopLines: stopLines
      })
    }
  }
  render (props, state) {
    return <div className='App'>
      { state.stopLines || <span>Loading...</span> }
      { state.stopLines && state.stopLines.map(line => <StopLinePanel data={line} />)}
    </div>
  }
}

/**
 * Parse window.location.hash to structure data
 * @param  {String} locationHash window.location.hash ('#/sh/765-0-15,985-1-5')
 * @return {Array}               Multiple lines within a bus stop.
 *                               [
 *                                  {lineid: 765, direction: 0, stopid: 15},
 *                                  {lineid: 985, direction: 1, stopid: 5}
 *                               ]
 */
function parseLocationHash (locationHash) {
  try {
    const stopLines = locationHash.split('/')[2].split(',')
    return stopLines.map(lineStop => {
      const [lineid, direction, stopid] = lineStop.split('-')
      return {lineid, direction, stopid}
    })
  } catch (e) {
    return false
  }
}
