const utils = require('../utils')

const font = {
  name: "Menlo",
  size: 11,
}

var viewList = {
  'now': {
    color: '#ffa7d3',
    order: 'now',
    text: utils.getNowTime(),
  },
  'network': {
    color: '#6ef2ae',
    order: 'network',
    text: utils.getNetwork(),
  },
  'disk': {
    color: '#ffcc66',
    order: 'disk --graph',
    text: utils.renderDisk(),
  },
  'fans': {
    color: '#ff9468',
    order: 'fans -V Weibo -V Github',
    text: 'Weibo: 0 / Github: 0',
  }
}

function getViews() {
  const views = []
  for (let i in viewList) {
    views.push({
      type: "text",
      props: {
        text: "user@" + utils.config.user + ":~ $ " + viewList[i].order,
        font,
        color: $color("#999999")
      }
    }, {
      type: "text",
      props: {
        text: viewList[i].text,
        font,
        color: $color(viewList[i].color || "#ffffff")
      }
    })
  }
  return views
}

module.exports = {
  getViews: getViews,
  viewList: viewList
}