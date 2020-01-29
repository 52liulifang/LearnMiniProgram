// pages/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
nowTime:new Date().toLocaleString()
  },

 onLoad(){
   setInterval(()=>{
     this.setData({
       nowTime: new Date().toLocaleString()
     })
   },1000)
 }
})