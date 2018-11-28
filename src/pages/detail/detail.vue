<template>
  <div class="wrap">
    <img :src="isPlay? detail.music.coverImgUrl:detail.detail_img" alt="" class="logo" >
    <img class="musicImg"
         :src="isPlay?'/static/images/music/music-start.png':'/static/images/music/music-stop.png'"
         alt="" @tap="playAudio">
    <div class='avatar_date'>
      <img :src="detail.avatar" alt="">
      <text>{{detail.author}}</text>
      <text>发布于{{detail.date}}</text>
    </div>
    <text  class='title'>{{detail.title}}</text>
    <div  class='collection_share'>
      <div class='bg_img'>
        <img :src="isCollection? '/static/images/icon/collection.png':'/static/images/icon/collection-anti.png'" alt="" @tap="collection">
        <img src="/static/images/icon/share-anti.png" alt="" @tap="share">
      </div>
      <div class='line'></div>
    </div>
    <button open-type="share">转发文章</button>
    <text class='info'>
      {{detail.detail_content}}
    </text>
  </div>
</template>

<script>
  import ListData from '../../datas/list-data';

  export default {
    data(){
      return {
        detail: {},
        isPlay: false,
        isCollection: false
      }
    },
    beforeMount(){
      // console.log(this);
      const id = this.$mp.query.id; //字符串类型
      const listData = ListData.list_data;
      const detail = listData.find(item=> item.postId === id * 1);
      this.detail = detail;


      wx.onBackgroundAudioPause(()=>{
        this.isPlay = false;
        this.$store.dispatch('updateIsPlay', false);
        this.$store.dispatch('updatePageIndex', this.detail.postId);
      });
      wx.onBackgroundAudioPlay(()=>{
        this.isPlay = true;
        this.$store.dispatch('updateIsPlay', true);
        console.log(this.$store);
      });
    },
    methods:{
      playAudio () {
        this.isPlay = !this.isPlay;
        const {dataUrl, title} = this.detail.music;
        if (this.isPlay){
          wx.playBackgroundAudio({
            dataUrl,
            title
          });
        }else{
          wx.pauseBackgroundAudio();
        }
        this.$store.dispatch('updateIsPlay', this.isPlay);
        this.$store.dispatch('updatePageIndex', this.detail.postId);
      },
      collection () {
        this.isCollection = !this.isCollection;
        const key = this.detail.postId;
        let obj = wx.getStorage({
          key:'isCollection'
        });
        if (!obj){
          obj =  {};
        }
        obj[key] = this.isCollection;
        wx.setStorage({
          key: 'isCollection',
          data: obj
        });
        wx.showToast({
          title: this.isCollection? '收藏成功':'取消收藏'
        })
      },
      share () {
        wx.showActionSheet({
          itemList: ['分享到朋友圈','分享到qq','分享到微博','分享到朋友']
        });
      }
    }
  }
</script>

<style >
  /* pages/detail/detail.wxss */
  .wrap{
    display: flex;
    flex-direction: column;
  }
  .collection_share{
    position: relative;
  }
  .logo{
    width: 100%;
    height: 460rpx;
  }
  .musicImg{
    width: 60rpx;
    height: 60rpx;
    position: absolute;
    top: 200rpx;
    left: 50%;
    margin-left: -30rpx;
  }
  .collection_share .bg_img{
    float: right;
    margin-right: 40rpx;
  }
  .collection_share .bg_img image{
    width: 100rpx;
    height: 100rpx;
    margin-right: 10rpx;
  }
  .collection_share .line{
    height: 1px;
    width: 90%;
    background: #eee;
    position: absolute;
    top: 50%;
    left: 5%;
    z-index: -1;
  }
</style>
