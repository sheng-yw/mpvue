<template>
  <div>
    <div v-for="(movie, index) in movies" :key="index"  class='movie_wrap' @tap="gotoMovieDetail(movie.id)">
      <img class='movie_img' :src="movie.images.large" alt="">
      <div class='movie_info'>
        <text class='movie_title'>{{movie.original_title}}</text>
        <text class='movie_year'>年份：{{movie.year}}</text>
        <text class='movie_director'>导演：{{movie.directors[0].name}}</text>
      </div>
      <text class='movie_rating'>{{movie.rating.average}}</text>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['movies'])
    },
    mounted(){
      this.$store.dispatch('updateMovies');

    },
    methods:{
      gotoMovieDetail(id){
        wx.navigateTo({
          url: `/pages/movie/main?id=${id}`
        })
      }
    }
  }
</script>

<style >
  /* pages/movies/movies.wxss */
  .movie_wrap{
    display: flex;
    padding: 10rpx;
    border-bottom: 1rpx solid #eee;
  }
  .movie_img{
    width: 200rpx;
    height: 200rpx;
  }
  .movie_info{
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-left: 10rpx;
  }
  .movie_title{
    font-size: 40rpx;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .movie_year{
    margin: 20rpx 0;
    font-size: 30rpx;
    color: #333;
  }
  .movie_director{
    font-size: 30rpx;
    color: #666;
  }
  .movie_rating{
    color: red;
    font-weight: bold;
  }
</style>
