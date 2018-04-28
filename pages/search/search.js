
const { Tab, extend } = require('../../zanui/dist/index');

Page(extend({}, Tab, {
  data: {
    inputShowed: false,
    inputVal: "",
    tab1: {
      list: [{
        id: 'all',
        title: '综合'
      }, {
        id: 'topay',
        title: '销量'
      }, {
        id: 'tosend',
        title: '价格'
      }, {
        id: 'send',
        title: '筛选'
      }],
      selectedId: 'all'
    }
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;

    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
  }
}));