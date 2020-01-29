// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

handleInput(event){
console.log('用户输入内容：',event)
},
handleFocus(event) {
    console.log('用户输入：', event)
  },
  handleBlur(event) {
    console.log('用户：', event)
  }
})