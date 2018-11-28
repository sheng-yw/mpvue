<template>
  <!--pages/movieDetail/movieDetail.wxml-->
  <div class="wrap">
    <img :src="movie.images.large">
    <text>{{movie.title}}</text>
    <text>{{movie.genres}}</text>
    <div>
      <text v-for="(item, index) in movie.casts" :key="index">{{item.name}}</text>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    computed:{
      ...mapState(['movies']),
      movie(){
        const id = this.$mp.query.id;
        return this.movies.find( item => item.id === id*1)
      }
    }
  }
</script>

<style >
  .wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
