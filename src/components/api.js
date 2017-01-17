import axios from 'axios'

function fetchBusLine (lineid) {
  const busLineApi = `https://busline.now.sh/sh/line?line=${lineid}`
  return axios.get(busLineApi)
}

function fetchBusStop (lineid, direction, stopid) {
  const busStopApi = `https://busline.now.sh/sh/stop?line=${lineid}&direction=${direction}&stop=${stopid}`
  return axios.get(busStopApi)
}

export {
  fetchBusLine,
  fetchBusStop
}
