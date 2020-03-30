// pages/my/my.js

import findData from '../../api/findData.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: findData.navData,
    contentList: findData.contentData,
    videoTitle: "",
    videoUrl: "",
    isShow: false
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
  onShow: function() {

  },

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
  close() {
    console.log('关闭弹框。。。。')
    let isShow = false;
    this.setData({
      isShow: isShow
    })

    console.log(this.data.isShow)
  },
  openVideo(e) {
    console.log("e=====>", e)
    let text = e.currentTarget.dataset.text;
    let videosrc = e.currentTarget.dataset.videosrc;
    this.setData({
      videoTitle: text,
      videoUrl: videosrc,
      isShow: true
    })
  }
})