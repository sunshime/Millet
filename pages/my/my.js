// pages/leftSwiperDel/index.js

import delList from '../../api/delList.js'

var app = getApp();
Page({

  data: {
    delWidth: 180,
    list: [{
        id: 0,
        name: '张三',
        tel: 13552525252,
        address: '河北省石家庄市长安区',
        style: ''
      },
      {
        id: 1,
        name: '李四',
        tel: 13552525252,
        address: '河北省石家庄市桥西区长兴街',
        style: ''
      },
      {
        id: 2,
        name: '王五',
        tel: 13552525252,
        address: '河北省石家庄市裕华区槐安路',
        style: ''
      }
    ],
    startX: 0,

  },
  touchS: function(e) {
    var that = this
    // console.log(e)
    if (e.touches.length == 1) {
      that.setData({
        startX: e.touches[0].clientX //开始触摸的x位置
      })
    }
  },
  touchM: function(e) {
    var that = this
    // console.log(e)
    if (e.touches.length == 1) {
      var moveX = e.touches[0].clientX //移动时的x位置
      var disX = that.data.startX - moveX //移动的x距离差值
      var delW = that.data.delWidth //删除按钮宽度
      var style = ''
      if (disX == 0 || disX < 0) {
        style = "left:0px"
      } else if (disX > 0 && disX < delW) {
        style = "left:-" + disX + "px";
      } else if (disX >= delW) {
        style = "left:-" + delW + "px";
      }
    }

    var idx = e.target.dataset.idx;
    var list = that.data.list;
    if (idx >= 0) {
      list[idx].style = style
      // console.log(style)
      that.setData({
        list: list
      })
    }
  },
  touchE: function(e) {
    // console.log(e)
    var that = this
    if (e.changedTouches.length == 1) {
      var endX = e.changedTouches[0].clientX;
      var disX = that.data.startX - endX;
      var delW = that.data.delWidth;

      var style = disX > delW / 3 ? "left-" + delW + "px" : "left:0";
      var idx = e.target.dataset.idx;
      var list = that.data.list;
      if (idx >= 0) {
        list[idx].style = style
        that.setData({
          list: list
        })
      }
    }
  },
  // 转换单位
  getDelWidth: function(w) {
    var real = 0;
    try {
      var res = wx.getSystemInfoSync().windowWidth;
      var scale = (750 / 2) / (w / 2);
      // console.log(scale);
      real = Math.floor(res / scale);
      return real;
    } catch (e) {
      return false;
    }
  },
  initEleWidth: function() {
    var delWidth = this.getDelWidth(this.data.delWidth);
    this.setData({
      delWidth: delWidth
    })
  },
  delItem: function(e) {
    var that = this
    var idx = e.target.dataset.index;
    var list = that.data.list
    console.log(idx)
    list.splice(idx, 1);
    that.setData({
      list: list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    that.initEleWidth();
  }
})