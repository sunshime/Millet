// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
        id: 1,
        right: 0,
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50649d7b5706f4cd9f658e93db6b6564.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "小米真无线蓝牙耳机 Air 2",
        price: 278,
        num: 1,
        isTouchMove: false, //默认隐藏删除
        checked: false
      },
      {
        id: 2,
        right: 0,
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/321610e787393c42e5cb2e5730a7681d.jpg?thumb=1&w=200&h=200",
        title: "小米小爱蓝牙音箱 随身版",
        price: 49,
        num: 1,
        isTouchMove: false, //默认隐藏删除
        checked: false
      },
      {
        id: 3,
        right: 0,
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "小米无线充电宝青春版10000mAh",
        price: 129,
        num: 1,
        isTouchMove: false, //默认隐藏删除
        checked: false
      },
      {
        id: 4,
        right: 0,
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c149537ebb0c2cdb977ddd93200074f4.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "小米旅行箱 20英寸 布朗熊限量版",
        price: 149,
        num: 1,
        isTouchMove: false, //默认隐藏删除
        checked: false
      }
    ],
    noCheck: "https://i.loli.net/2020/03/05/zaBLDGlk2dCUwZQ.png",
    check: "https://i.loli.net/2020/03/05/2ODunK73vlaHhIw.png",
    startX: 0, //开始坐标
    startY: 0,
    isChecked: false, // 是否全选
    checkList: [], // 选中的项
    buyPrice: 0 // 结算总价
  },

  // 开始滑动
  touchStart(e) {
    console.log('touchStart=====>', e);
    //开始触摸时 重置所有删除

    this.data.dataList.forEach(function (v, i) {

      if (v.isTouchMove) //只操作为true的

        v.isTouchMove = false;

    })

    this.setData({

      startX: e.changedTouches[0].clientX,

      startY: e.changedTouches[0].clientY,

      dataList: this.data.dataList

    })
  },

  touchMove(e) {
    console.log('touchMove=====>', e);
    var that = this,

      index = e.currentTarget.dataset.index, //当前索引

      startX = that.data.startX, //开始X坐标

      startY = that.data.startY, //开始Y坐标

      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标

      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标

      //获取滑动角度

      angle = that.angle({
        X: startX,
        Y: startY
      }, {
        X: touchMoveX,
        Y: touchMoveY
      });

    that.data.dataList.forEach(function (v, i) {

      v.isTouchMove = false

      //滑动超过30度角 return

      if (Math.abs(angle) > 30) return;

      if (i == index) {

        if (touchMoveX > startX) //右滑

          v.isTouchMove = false

        else //左滑

          v.isTouchMove = true

      }

    })

    //更新数据

    that.setData({

      dataList: that.data.dataList

    })

  },
  touchEnd(e) {
    console.log('touchEnd=====>', e);

  },
  /**

* 计算滑动角度

* @param {Object} start 起点坐标

* @param {Object} end 终点坐标

*/

  angle: function (start, end) {

    var _X = end.X - start.X,

      _Y = end.Y - start.Y

    //返回角度 /Math.atan()返回数字的反正切值

    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);

  },


})