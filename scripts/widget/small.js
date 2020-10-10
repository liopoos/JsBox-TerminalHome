module.exports = function () {
  return {
    type: "vstack",
    props: {
      frame: {
        maxWidth: Infinity,
        maxHeight: Infinity,
      },
      alignment: $widget.horizontalAlignment.leading,
      spacing: 5,
      color: $color("white")
    },
    views: [{
      type: "text",
      props: {
        text: "Please use 2x4 or 4x4 widget",
        font: {
          size: 11
        }
      }
    }]
  }
}