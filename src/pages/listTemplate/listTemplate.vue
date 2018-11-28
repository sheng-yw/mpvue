<template >
    <div class='wrap' @tap="gotoDetail">
      <div class='avatar_date'>
        <img :src='item.avatar'/>
        <text>{{item.date}}</text>
      </div>
      <text class='title'>{{item.title}}</text>
      <img class='logo' :src='item.detail_img' />
      <text class='info'>{{item.detail_content}}</text>
      <div class='collect_browse'>
        <img :src='item.detail_love_image1' />
        <text>{{item.love_count}}</text>
        <img :src='item.detail_love_image2' />
        <text>{{item.attention_count}}</text>
      </div>
    </div>
</template>

<script>

  export default {
    props: {
      item:Object
    },
    methods: {
      gotoDetail () {
        wx.navigateTo({
          url:`/pages/detail/main?id=${this.item.postId}`
        })
      }
    }
  }
</script>

<style >
  .wrap{
    display: flex;
    flex-direction: column;
  }
  .logo{
    width: 100%;
    height: 400rpx;
  }
  .collect_browse image{
    width: 40rpx;
    height: 40rpx;
    margin-right: 20rpx;
  }
</style>
