// pages/category/category.js

import category from '../../api/category.js'
console.log('category============>', category)

// 声明全局变量
// menu 是否为左边进行滚动，如果是，则不需要再次设置左边的激活状态
let rightToTop = [],
  leftToTop = [],
  menu = 0,
  windowHeight, timeoutId;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: category,
    activeId: 'A', // 当前项
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  checkItem(e) {
    console.log('index===>', e.currentTarget.dataset.index)
    let index = e.target.dataset.index
    this.setData({
      activeId: index
    })

  },
  scrollRight() {

  }
})