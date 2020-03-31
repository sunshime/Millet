// components/tabbar/tabbar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [{
        iconPath: "./assets/images/home.png",
        selectedIconPath: "./assets/images/homeSelected.png",
        text: "首页",
        cur:'home'
      },
      {
        iconPath: "./assets/images/category.png",
        selectedIconPath: "./assets/images/categorySelected.png",
        text: "分类",
        cur:'category'
      },
      {
        iconPath: "./assets/images/find.png",
        selectedIconPath: "./assets/images/findSelected.png",
        text: "发现",
        cur:'find'
      },
      {
        iconPath: "./assets/images/cart.png",
        selectedIconPath: "./assets/images/cartSelected.png",
        text: "购物车",
        cur:'cart'
      },
      {
        iconPath: "./assets/images/user.png",
        selectedIconPath: "./assets/images/userSelected.png",
        text: "我的",
        cur:'my'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})