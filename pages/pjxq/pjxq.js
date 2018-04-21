const { Tab, extend } = require('../../zanui/dist/index');
Page(extend({}, Tab, {
  data: {
    flag: 0,
    tab1: {
      list: [{
        id: 'all',
        title: '全部'
      }, {
        id: 'good',
        title: '好评'
      }, {
        id: 'normal',
        title: '中评'
      }, {
        id: 'bad',
        title: '差评'
      }],
      selectedId: 'all'
    },
    // src: '../../resources/cat.jpg',
    // arrayPhoto: [{
    //   mode: 'center',
    // }],
    changeColor1: function () {
      var that = this;
      that.setData({
        flag: 1
      });
    },
    changeColor2: function () {
      var that = this;
      that.setData({
        flag: 2
      });
    },
    changeColor3: function () {
      var that = this;
      that.setData({
        flag: 3
      });
    },
    changeColor4: function () {
      var that = this;
      that.setData({
        flag: 4
      });
    },
    changeColor5: function () {
      var that = this;
      that.setData({
        flag: 5
      });
    }
  },
  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;

    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
  }
}));

