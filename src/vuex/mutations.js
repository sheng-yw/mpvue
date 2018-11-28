import {UPDATE_PAGE_INDEX, UPDATE_IS_PLAY, UPDATE_MOVIES} from './mutations-type';


export default {

  [UPDATE_IS_PLAY]: function(state,{isPlay}){
    state.isPlay = isPlay;
  },
  [UPDATE_PAGE_INDEX]: function (state,{index}) {
    state.pageIndex = index;
  },
  [UPDATE_MOVIES]: function (state, {movies}) {
    state.movies = movies;
  }
}
