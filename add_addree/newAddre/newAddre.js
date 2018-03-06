var index = 0;
Page({
  data:{
    name:"请填写您的姓名",
    tel:"请填写您的联系方式",
    addreValue:0,
    addreRange: ['　', '郑州市金水区', '郑州市郑东新区','郑州市中原区', '郑州市管城回族区', '郑州市上街区', '郑州市惠济区', '郑州市中牟县', '郑州市巩义市', '郑州市荥阳市', '郑州市新密市', '郑州市新郑市', '郑州市登封市', '其他区'],
    door:"详细地址",
    areaValue:0,
    areaRange: ['　　', '郑汴路', '紫荆山路', '郑密路', '郑密路', '郑上路', ' 自由路', ' 政通路', '职工路', '职工路', '郑花路  ', '支农路  ', '郑新里 ','中原路'],
    index:"0"
  },  
  // setDefault: function () {
  //   var self = this,
  //     address = self.data.address;
  //   if (address.isDefault == 0) {
  //     address.isDefault = 1;
  //   } else {
  //     address.isDefault = 0;
  //   }
  //   self.setData({
  //     address: address
  //   });
  // },       
    areaPickerBindchange:function(e){
    this.setData({
      areaValue:e.detail.value
    })
  },
    addrePickerBindchange:function(e){
    this.setData({
      addreValue:e.detail.value
    })
  },
  formSubmit: function(e) {
    var warn ="";
    var that = this;
    var flag = false;
    if(e.detail.value.name==""){
      warn = "请填写您的姓名！";
    }else if(e.detail.value.tel==""){
      warn = "请填写您的手机号！";
    }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))){
      warn = "手机号格式不正确";
    }else if(e.detail.value.addre=='0'){
      warn = "请选择您的所在地区";
    }else if(e.detail.value.door==""){
      warn = "请输入您的具体地址";
    }else if(e.detail.value.area=='0'){
      warn = "请输入您的街道";
    }else{
      flag=true;
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
        wx.redirectTo({
        url: '../chooseAddre/chooseAddre?tel='+e.detail.value.tel+"&addre="+that.data.addreRange[e.detail.value.addre]+"&door="+e.detail.value.door+"&name="+e.detail.value.name+"&area="+that.data.areaRange[e.detail.value.area]+"&flag="+flag+"&areavalue="+e.detail.value.area+"&addrevalue="+e.detail.value.addre+"&door="+e.detail.value.door
        //？后面跟的是需要传递到下一个页面的参数

      }); 
         console.log("传过去的地址下标是多少？"+e.detail.value.addre)
    }
    if(flag==false){
      wx.showModal({
      title: '提示',
      content:warn
    })
    }
    
  },
  
  })