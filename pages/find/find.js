const app = getApp()
import category from '../../api/category.js'

Page({
  data: {
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    category: category,
    load: true
  },
  onLoad() {
    // wx.showLoading({
    //   title: '加载中...',
    //   mask: true
    // });
    // let category = [{}];
    // for (let i = 0; i < 26; i++) {
    //   category[i] = {};
    //   category[i].name = String.fromCharCode(65 + i);
    //   category[i].id = i;
    // }
    // this.setData({
    //   category: category,
    //   categoryCur: category[0]
    // })
  },
  onReady() {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
    console.log('VerticalNavTop===>', this.data.VerticalNavTop)
  },
  VerticalMain(e) {
    console.log('e===>',e)
    let that = this;
    let category = this.data.category;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < category.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + category[i].id);
        view.fields({
          size: true
        }, data => {
          category[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          category[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        category: category
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < category.length; i++) {
      if (scrollTop > category[i].top && scrollTop < category[i].bottom) {
        that.setData({
          VerticalNavTop: (category[i].id - 1) * 50,
          TabCur: category[i].id
        })
        return false
      }
    }
  }
})