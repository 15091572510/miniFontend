// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      imgUrl: 'https://imgshop.woojia.com/newimages/s-20210401/11/e36535a9c37ba689cf514db40a760cf2.png',
      title: '这里是标题',
      desc: '这里是描述，这里是描述，这里是描述，这里是描述'
    },{
      imgUrl: 'https://imgshop.woojia.com/newimages/s-20210401/11/e36535a9c37ba689cf514db40a760cf2.png',
      title: '这里是标题',
      desc: '这里是描述，这里是描述，这里是描述，这里是描述'
    },{
      imgUrl: 'https://imgshop.woojia.com/newimages/s-20210401/11/e36535a9c37ba689cf514db40a760cf2.png',
      title: '这里是标题',
      desc: '这里是描述，这里是描述，这里是描述，这里是描述'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nbTitle: '新标题',
      // nbLoading: true,
      nbFrontColor: '#ffffff',
      nbBackgroundColor: '#000000',
    })
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