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
        checked: false
      },
      {
        id: 2,
        right: 0,
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/321610e787393c42e5cb2e5730a7681d.jpg?thumb=1&w=200&h=200",
        title: "小米小爱蓝牙音箱 随身版",
        price: 49,
        num: 1,
        checked: false
      },
      {
        id: 3,
        right: 0,
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "小米无线充电宝青春版10000mAh",
        price: 129,
        num: 1,
        checked: false
      },
      {
        id: 4,
        right: 0,
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c149537ebb0c2cdb977ddd93200074f4.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "小米旅行箱 20英寸 布朗熊限量版",
        price: 149,
        num: 1,
        checked: false
      }
    ],
    noCheck: "https://i.loli.net/2020/03/05/zaBLDGlk2dCUwZQ.png",
    check: "https://i.loli.net/2020/03/05/2ODunK73vlaHhIw.png",
    delWidth: 160,
    startX: 0,
    isChecked: false, // 是否全选
    checkList: [], // 选中的项
    buyPrice: 0 // 结算总价
  },

  // 开始滑动
  touchStart(e) {
    console.log('touchStart=====>', e);
    
  },

  touchMove(e) {
    console.log('touchMove=====>', e);

  },
  touchEnd(e) {
    console.log('touchEnd=====>', e);

  }


})