const { Tab, extend } = require('../../zanui/dist/index');
Page(extend({}, Tab, {
  data: {
    tab1: {
      list: [{
        id: 'used',
        title: '可用优惠券'
      }, {
        id: 'unused',
        title: '可用优惠券'
      }],
      selectedId: 'used'
    },
  },
  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;

    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
  }
}));