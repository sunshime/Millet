const app = getApp()
import category from '../../api/category.js'

Page({
  data: {
    tabCur: 0,
    mainCur: 0,
    verticalNavTop: 0,
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
      tabCur: e.currentTarget.dataset.id,
      mainCur: e.currentTarget.dataset.id,
      // 实现左边自动滑动到某个位置 4表示自动滑动到 第五项 （4为索引值）
      verticalNavTop: (e.currentTarget.dataset.id - 4) * 50
    })
    // console.log('verticalNavTop===>', this.data.verticalNavTop)
  },

  VerticalMain(e) {
    console.log('e===>', e)
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
          verticalNavTop: (category[i].id - 1) * 50,
          tabCur: category[i].id
        })
        return false
      }
    }
  }
})