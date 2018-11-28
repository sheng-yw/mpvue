<template>
  <div class="list_wrap">
    <import src="/pages/listTemplate/listTemplate.vue"></import>
    <swiper class="swiper" indicator-dots indicator-color="orange" indicator-active-color="greenyellow">
      <swiper-item>
        <image src="/static/images/detail/carousel/01.jpg" class="slide-image" />
      </swiper-item>
      <swiper-item>
        <image src="/static/images/detail/carousel/02.jpg" class="slide-image" />
      </swiper-item>
      <swiper-item>
        <image src="/static/images/detail/carousel/03.jpg" class="slide-image" />
      </swiper-item>
      <swiper-item>
        <image src="/static/images/detail/carousel/04.jpg" class="slide-image" />
      </swiper-item>
    </swiper>
    <div>
      <ListTemplate v-for="(item, index) in list" :item="item" :key="index"/>
    </div>
  </div>
</template>

<script>
  import ListTemplate from '../listTemplate/listTemplate.vue';
  import listData from '../../datas/list-data';
  export default {
    data(){
      return {
        list: []
      }
    },
    mounted(){
      this.list = listData.list_data;
    },
    components:{
      ListTemplate
    }
  }
</script>

<style >
  .swiper image{
    width: 100%;
    height: 300rpx;
  }
</style>
