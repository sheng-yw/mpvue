import {UPDATE_IS_PLAY, UPDATE_PAGE_INDEX, UPDATE_MOVIES} from './mutations-type';
import {getMovies} from '../api';

export default {
  updateIsPlay({commit},isPlay){
    commit(UPDATE_IS_PLAY,{isPlay});
  },
  updatePageIndex({commit},index){
    commit(UPDATE_PAGE_INDEX,{index});
  },
  async updateMovies({commit}){
    //发送ajax
    const data = await getMovies();
    commit(UPDATE_MOVIES, {movies: data.subjects});
  }
}
