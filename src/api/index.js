import sendAjax from './ajax';

export const getMovies = ()=> sendAjax('http://t.yushu.im/v2/movie/top250',{});
