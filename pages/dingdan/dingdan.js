const { Tab, extend } = require('../../zanui/dist/index');

Page(extend({}, Tab, {
  data: {
    tab1: {
      list: [{
        id: 'all',
        title: '全部订单'
      }, {
        id: 'topay',
        title: '待付款'
      }, {
        id: 'tosend',
        title: '待发货'
      }, {
        id: 'send',
        title: '待收货'
      }, {
        id: 'sign',
        title: '待评价'
      }],
      selectedId: 'all'
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