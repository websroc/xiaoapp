
var app = getApp();
Page({
  data: {
    arrayVips: [{
      title: "会员客户：",
      oneti: "1. 免费和三次（所有店铺茶一壶），价值1000",
      twoti: "2. 首单打折，并反消费金额",
      threeti: "3. 客户关怀，新茶上市邮寄客户品尝",
      fourti: "4. 所有打7折",
      srced:"../../images/jiji.png"
    }],
    arrayVip: [
      {
        mode: 'scaleToFill',
        text: ' 专享红包',
        src: '../../images/value1.png'
      }, {
        mode: 'scaleToFill',
        text: '奖金激励',
        src: '../../images/value2.png'
      }, {
        mode: 'scaleToFill',
        text: '专属折扣',
        src: '../../images/value1.png'
      }, {
        mode: 'scaleToFill',
        text: '金币特权',
        src: '../../images/value2.png'
      }
    ],
  }
})