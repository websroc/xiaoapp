var app = getApp();
Page({
  data: {
    imgUrls: [
      '../../images/01.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    array: [{
      name: 'redtea',
      mode: 'scaleToFill',
      text: '红茶',
      src: '../../images/redtea.png'
    }, {
      name: 'greentea',
      mode: 'scaleToFill',
      text: '绿茶',
      src: '../../images/greentea.png'
    }, {
      name: 'blacktea',
      mode: 'scaleToFill',
      text: '黑茶',
      src: '../../images/blacktea.png'
    }, {
      name: 'bluetea',
      mode: 'scaleToFill',
      text: '绞股蓝',
      src: '../../images/bluetea.png'
    }, {
      name: 'teatool',
      mode: 'scaleToFill',
      text: '茶具',
      src: '../../images/teatool.png'
    }
    ]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})