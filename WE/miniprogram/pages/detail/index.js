// pages/detail/index.js
const db = wx.cloud.database();//初始化数据库
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDetail:{},
    content:'',//评价内容
    score:5,//默认评分
    images:[],//上传的图片
    fileIds:[],
    movieId:-1
  },
  onContentChange:function(event){
    this.setData({
      content:event.detail
    });
  },
  onScoreChange: function (event){
    this.setData({
      score: event.detail
    });
  },
  uploadImg:function(){
    //选择图片
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res=> {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        this.setData({
          images: this.data.images.concat(tempFilePaths)
        });
      }
    })
  },
  submit:function(){
    wx.showLoading({
      title: '评论中',
    });
    //上传图片到云存储
    let promiseArr = [];//
    for(let i=0;i<this.data.images.length;i++){
      promiseArr.push(new Promise((reslove, reject)=>{
        let item = this.data.images[i];
        let suffix = /\.\w+$/.exec(item)[0];//正则表达式，获取文件扩展名
        wx.cloud.uploadFile({
          cloudPath: new Date().getTime()+suffix,//上传至云端的路径
          filePath: item, // 文件路径
        }).then(res => {
          // get resource ID
          this.setData({
            fileIds: this.data.fileIds.concat(res.fileID)
          });
          reslove();
        }).catch(error => {
          // handle error
        })
      })
      )
    }
    Promise.all(promiseArr).then(res=>{
      //插入数据
      db.collection('movieReview').add({
        data:{
          content:this.data.content,
          score: this.data.score,
          movieId: this.data.movieId,
          fileIds:this.data.fileIds
        }
      }).then(res=>{
        wx.hideLoading();
        wx.showToast({
          title: '评论成功',
        });
        }).catch(error => {
          wx.hideLoading();
          wx.showToast({
            title: '评论失败',
          });
        });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      movieId: options.moveid
    });
    wx.cloud.callFunction({
      name:'movieDetail',
      data:{
        movieid: options.moveid
      }
    }).then(res=>{
      this.setData({
        movieDetail: JSON.parse(res.result)
      })
    }).catch(err=>{
      cosnole.error(err)
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