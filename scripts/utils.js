const network = require('./network')
const config = JSON.parse($file.read('assets/config.json').string)
const fansUser = config.fans
const moment = require('./moment')

function getNowTime(time) {
  return moment().format("dddd, MMMM Do YYYY")
}

function renderDisk() {
  const len = 30
  const disk = $device.space.disk
  const free = ".".repeat(Math.floor(disk.free.bytes / disk.total.bytes * len))
  const used = "#".repeat(len - free.length)
  const diskProcess = "[" + used + free + "] " + Math.round((disk.total.bytes - disk.free.bytes) / disk.total.bytes * 100) + "%"
  return diskProcess
}

function getNetwork() {
  const data = network.data()
  console.log(data)
  var text
  switch (data.net_type) {
    case 1:
      text = "[Wi-Fi] SSID: " + (data.ssid || 'N/A') + " / IP: " + (data.ip || 'N/A')
      break
    case 2:
      text = "[Cellular]"
      break
    default:
      text = 'network offline.'
  }
  return text
}

async function getFans() {
  const url = "https://api.spencerwoo.com/substats/?source=jikeFollower&queryKey=" + fansUser.jike + "&source=github&queryKey=" + fansUser.github + "&source=weibo&queryKey=" + fansUser.weibo
  return $http.get({
    url: url
  })
}

module.exports = {
  getNowTime: getNowTime,
  renderDisk: renderDisk,
  getNetwork: getNetwork,
  getFans: getFans,
  config: config,
}