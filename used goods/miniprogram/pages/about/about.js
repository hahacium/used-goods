// pages/about/about.js
const config = require("../../config.js");

Page({

      /**
       * 页面的初始数据
       */
      data: {
            github: 'https://github.com/hahacium/used-goods',
            weixin: JSON.parse(config.data).kefu.weixin,
            qq: JSON.parse(config.data).kefu.qq,
            des:'开发此程序的初衷仅为解决校园二手书问题，灵感的起源，来自朋友圈学弟们的卖书说说，知识无价，希望每门书都能实现最大的价值，找到自己最好的归宿。\n\n从产品设计到UI再到所有页面逻辑代码皆由学生队友完成，出现一些BUG应该也很正常，发现了请及时和本人反馈。'
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {

      },

      onReady: function () {

      },
      //复制
      copy(e) {
            wx.setClipboardData({
                  data: e.currentTarget.dataset.copy,
                  success: res => {
                        wx.showToast({
                              title: '复制' + e.currentTarget.dataset.name + '成功',
                              icon: 'success',
                              duration: 1000,
                        })
                  }
            })
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