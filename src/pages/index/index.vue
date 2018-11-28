<template>
  <div class="wrap">
    <img class="index_img" v-if="userInfo.nickName" :src="userInfo.avatarUrl" alt="">
    <button class="index_img" v-else open-type="getUserInfo" @getuserinfo='handleGetUserInfo'>点击获取用户权限</button>
    <p class="index_text">hello{{userInfo.nickName}}</p>
    <button class="index_start" @tap="goStart">开启小程序之旅</button>
  </div>

</template>

<script>
  export default {
    data(){
      return {
        userInfo:{}
      }
    },
    mounted () {
      this.getUserInfo();
    },
    methods: {
      handleGetUserInfo (msg) {
        if (msg.mp.detail.rawData){
          this.getUserInfo();
        }
      },
      getUserInfo() {
        wx.getUserInfo({
          success: (msg)=>{
            this.userInfo = msg.userInfo;
          }
        })
      },
      goStart(){
        if (!this.userInfo.nickName)return;
        wx.switchTab({
          url:'/pages/list/main'
        });
      }
    }
  }
</script>

<style>
  page{
    background-color: #8ed145;
  }
  .wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .index_img{
    width: 300rpx;
    height: 300rpx;
    border-radius: 50%;
  }
  .index_text{
    margin-top:100rpx;
  }
  .index_start{
    margin-top:100rpx;
  }
</style>
