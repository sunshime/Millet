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

  },
  onReady() {
    // wx.hideLoading()
  },

  // 切换左边菜单
  tabSelect(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id,
      mainCur: e.currentTarget.dataset.id,
      // 实现左边自动滑动到某个位置 4表示自动滑动到 第五项 （4为索引值）
      verticalNavTop: (e.currentTarget.dataset.id - 4) * 50
    })
    // console.log('verticalNavTop===>', this.data.verticalNavTop)
  },

  // 滑动右边对应左边菜单切换
  VerticalMain(e) {
    console.log('e===>', e)
    let that = this;
    let category = this.data.category;
    let tabHeight = 0;

    for (let i = 0; i < category.length; i++) {
      let view = wx.createSelectorQuery().select("#main-" + i);
      console.log("view===>", view)
      view.fields({
        size: true
      }, data => {
        console.log("data===>", data)

        category[i].top = tabHeight;
        tabHeight = tabHeight + data.height;
        category[i].bottom = tabHeight;

      }).exec();
    }
    that.setData({
      category: category
    })

    console.log(this.data.category)

    let scrollTop = e.detail.scrollTop + 30;
    for (let i = 0; i < category.length; i++) {
      if (scrollTop > category[i].top && scrollTop < category[i].bottom) {
        that.setData({
          verticalNavTop: (i - 4) * 50,
          tabCur: i
        })
        return false
      }
    }
  }
})