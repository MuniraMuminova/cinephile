// import axios from "axios";

// export default {
//     namespaced: true,
//     state: {
//         path: 'https://api.themoviedb.org/3/',
//         videoTv: null,
//         videoMovie: null
//     },
//     mutations:{
//         getMovieVideo(state, payload){
//             state.videoMovie = payload
//         },
//         getTvVideo(state, payload){
//             state.videoTv = payload
//         }
//     },
//     actions:{
//         async getVideo({commit, state, rootState}, info){
//             let {id, page} = info
//             try {
//                 const res = await axios.get(`${state.path}${page}${id}/videos?api_key=${rootState.apiKey}&language=ru-RU&page=1`)
//                 const data = res.data.results
//                 console.log(data);
//                 if(page == '/movie/') commit('getMovieVideo', data)
//                 else commit('getTvVideo', data)
//             } catch (error) {
//                 console.log('Произошла ошибка при получении популярных сериалов', error);
//             }
//         }
//     },
//     getters:{}
// }
import axios from 'axios'
export default {
   namespaced: true,
   state: {/* https://www.youtube.com/embed/ */
      path: 'https://api.themoviedb.org/3/',
      movie: null,
      tv: null
   },
   mutations: {
      getVideos(state,payload){
         state.movie = payload
      }
   },
   actions: {
      async getVideos({ commit, state, rootState }, videoId) {
         const {type, id} = videoId
         try {
            const res = await axios.get(`${state.path}${type}/${id}/videos?api_key=${rootState.apiKey}`)
            const all = `https://www.youtube.com/embed/${res.data.results[0].key}`
            const linkVideo = res.data.results[0].key
            commit('getVideos', all)
         } catch (error) {
            console.log(error);
         }
      }
   },
   getters: {

   }
}