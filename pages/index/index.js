//index.js
import bannerList from '../../api/banner.js'
console.log('bannerList====>', bannerList)
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperList: bannerList
  },

  onLoad: function() {},

})