// pages/home/home.js
const app = getApp()
console.log(app.globalDate.name)
Page({
data:{
  name:'Coderwhy',
  age:18,
  students:[{id:110,name:'sb',age:'14'},
    { id: 112, name: 'sm', age: '12' },
    { id: 113, name: 'bdsm', age: '17' },
    { id: 114, name: 'gtj', age: '15' }],
    counter:0
},
handleBtnClick(){
  //this.data.counter+=1
  this.setData({
    counter: this.data.counter + 1
  })
},
handleSubClick(){
  this.setData({
    counter: this.data.counter - 1
  })
},


handleGetUserInfo(event){
  console.log(event)
}
})