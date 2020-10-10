const utils = require('./utils')
const medium = require('./widget/medium')

const viewList = medium.viewList

function run() {
  const expireDate = new Date(new Date().getTime() + utils.config.expire * 60 * 1000)

  utils.getFans().then((fans) => {
    viewList.fans.text = "Weibo: " + fans.data.data.subsInEachSource.weibo + " / Github: " + fans.data.data.subsInEachSource.github || 0
    var views = medium.getViews()
    $widget.setTimeline({
      entries: [{
        date: new Date(),
        info: {}
      }],
      policy: {
        afterDate: expireDate
      },
      render: ctx => {
        const family = ctx.family;
        if (family == 0) {
          const small = require('./widget/small');
          return small()
        }
        return {
          type: "vstack",
          props: {
            frame: {
              maxWidth: Infinity,
              maxHeight: Infinity,
              alignment: $widget.alignment.topLeading,
            },
            alignment: $widget.horizontalAlignment.leading,
            spacing: 5,
            background: $color("#191A1C"),
            color: $color("white"),
            padding: $insets(15, 15, 15, 15)
          },
          views,
        };
      }
    });
  })
}


module.exports = {
  run: run
};