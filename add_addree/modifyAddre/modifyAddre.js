var flag=false;
Page({
  data:{
    name:"请填写您的姓名",
    tel:"请填写您的联系方式",
    addreValue:0,
    addreRange: ['　', '郑州市金水区', '郑州市郑东新区', '郑州市中原区', '郑州市管城回族区', '郑州市上街区', '郑州市惠济区', '郑州市中牟县', '郑州市巩义市', '郑州市荥阳市', '郑州市新密市', '郑州市新郑市', '郑州市登封市', '其他区'],
    door: "详细地址",
    areaValue: 0,
    areaRange: ['　　', '郑汴路', '紫荆山路', '郑密路', '郑密路', '郑上路', ' 自由路', ' 政通路', '职工路', '职工路', '郑花路  ', '支农路  ', '郑新里 ', '中原路'],
    index:"0"
  },
   onLoad: function(options) {
    this.setData({
    name:options.name,
    tel:options.tel,
    addreValue:options.addrevalue,
    areaValue:options.areavalue,
    door:options.door,
    index:options.index
    })
    console.log("传过来的index"+options.index);
    console.log("接收到的index"+this.data.index);
   },
 

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
  //点击删除
    delete:function(){
      var that = this;
      wx.showModal({
       title: '提示',
       content: '确认删除该地址信息吗？',
       success: function(res) {
         if (res.confirm) {
           console.log('用户点击确定')
            wx.redirectTo({
             url: '../chooseAddre/chooseAddre?index='+that.data.index+"&sign="+'2'
             }); 
         } else if (res.cancel) {
           console.log('用户点击取消')
      }
    }
})

    },
//点击取消，返回上个页面
    cancel:function(){
      wx.navigateBack({
         delta: 1
      })
    },
    //点击保存
  formSubmit: function(e) {
    var warn ="";
    var that = this;
    if(e.detail.value.name==""){
      warn = "请填写您的姓名！";
    }else if(e.detail.value.tel==""){
      warn = "请填写您的手机号！";
    }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))){
      warn = "手机号格式不正确";
    }else if(e.detail.value.addre=='0'){
      warn = "请选择您的所在区域";
    }else if(e.detail.value.door==""){
      warn = "请输入您的具体地址";
    }else if(e.detail.value.area=='0'){
      warn = "请输入您的房屋面积";
    }else{
      flag=true;
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
        wx.redirectTo({
        url: '../chooseAddre/chooseAddre?tel='+e.detail.value.tel+"&addre="+that.data.addreRange[e.detail.value.addre]+"&door="+e.detail.value.door+"&name="+e.detail.value.name+"&area="+that.data.areaRange[e.detail.value.area]+"&sign="+'1'+"&areavalue="+e.detail.value.area+"&addrevalue="+e.detail.value.addre+"&index="+that.data.index
        //？后面跟的是需要传递到下一个页面的参数
      }); 
    }
    if(flag==false){
      wx.showModal({
      title: '提示',
      content:warn
    })
    }
    
  },
  
  })