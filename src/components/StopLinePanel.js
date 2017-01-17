import { Component } from 'preact'
import { fetchBusLine, fetchBusStop } from './api'
import './StopLinePanel.css'

export default class StopLinePanel extends Component {
  componentDidMount () {
    const { lineid, direction, stopid } = this.props.data
    fetchBusLine(lineid).then(res => this.setState({
      buslines: res.data,
      currentLine: !direction
        ? res.data.lineResults1
        : res.data.lineResults0
    }))

    fetchBusStop(lineid, direction, stopid)
    .then(res => this.setState({
      bus: res.data
    }))
  }
  renderBusActivity (props) {
    if (props) {
      const { terminal, stopdis, time } = props
      return `${terminal} 还有${stopdis}站，约${parseInt(time / 60, 10)}分钟`
    } else if (this.state.bus) { // bus.cars.length = 0
      return '等待发车'
    } else {
      return '更新线路信息……'
    }
  }
  render (props, state) {
    const { lineid, stopid } = props.data
    const stop = state.currentLine && state.currentLine.stops[stopid - 1]
    const bus = state.bus && state.bus.cars[0]

    return <div className='stopline-panel'>
      <div className='title-row'>
        <div className='line-name'>{ lineid }</div>
        <div className='stop-name'>{ stop && stop.zdmc }</div>
      </div>
      <div className='state-row'>
        { this.renderBusActivity(bus) }
      </div>
    </div>
  }
}
