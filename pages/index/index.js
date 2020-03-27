//index.js
import bannerList from '../../api/banner.js'
import navList from '../../api/navList.js'
import goodList from '../../api/goodList.js'
console.log('goodList====>', goodList)
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperList: bannerList,
    navList: navList,
    goodList: goodList
  },

  onLoad: function() {},

})