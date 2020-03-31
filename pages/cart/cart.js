// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
        id: 1,
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50649d7b5706f4cd9f658e93db6b6564.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "小米真无线蓝牙耳机 Air 2",
        price: 278,
        num: 1,
        isTouchMove: false, //默认隐藏删除
        checked: false
      },
      {
        id: 2,
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/321610e787393c42e5cb2e5730a7681d.jpg?thumb=1&w=200&h=200",
        title: "小米小爱蓝牙音箱 随身版",
        price: 49,
        num: 1,
        isTouchMove: false, //默认隐藏删除
        checked: false
      },
      {
        id: 3,
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "小米无线充电宝青春版10000mAh",
        price: 129,
        num: 1,
        isTouchMove: false, //默认隐藏删除
        checked: false
      },
      {
        id: 4,
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
    isChecked: false, // 是否全选
    checkList: [], // 选中的项
    buyPrice: 0, // 结算总价

    // 设置开始的位置
    startX: 0,
    startY: 0,
  },

  // 开始滑动
  touchStart(e) {
    // console.log('touchStart=====>', e);
    let dataList = [...this.data.dataList]
    dataList.forEach(item => {
      if (item.isTouchMove) {
        item.isTouchMove = !item.isTouchMove;
      }
    });
    this.setData({
      dataList: dataList,
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY
    })
  },

  touchMove(e) {
    // console.log('touchMove=====>', e);
    let moveX = e.changedTouches[0].clientX;
    let moveY = e.changedTouches[0].clientY;
    let indexs = e.currentTarget.dataset.index;
    let dataList = [...this.data.dataList]

    let angle = this.angle({
      X: this.data.startX,
      Y: this.data.startY
    }, {
      X: moveX,
      Y: moveY
    });

    dataList.forEach((item, index) => {
      item.isTouchMove = false;
      // 如果滑动的角度大于30° 则直接return；
      if (angle > 30) {
        return
      }

      if (indexs === index) {
        if (moveX > this.data.startX) { // 右滑
          item.isTouchMove = false;
        } else { // 左滑
          item.isTouchMove = true;
        }
      }
    })

    this.setData({
      dataList
    })
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

  // 删除
  delItem(e) {
    let id = e.currentTarget.dataset.id;
    let dataList = [...this.data.dataList];
    console.log('id--->', id);


    for (let i = 0; i < dataList.length; i++) {
      const item = dataList[i];
      item.isTouchMove = false;
      if (item.id === id) {
        dataList.splice(i, 1);
        break;
      }
    }

    this.setData({
      dataList
    })
  }
})