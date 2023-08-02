import axios from "axios";

export default {
    namespaced: true,
    state: {
        path: 'https://api.themoviedb.org/3/',
        recommendMovie: null,
        recommendTv: null
    },
    mutations:{
        getMovieRec(state, payload){
            state.recommendMovie = payload
        },
        getTvRec(state, payload){
            state.recommendTv = payload
        },
        clearRecMovie(state){
            state.recommendMovie = null
        },
        clearRecMovie(state){
            state.recommendTv = null
        }
    },
    actions:{
        async getRecommend({commit, state, rootState}, info){
            let {id, page} = info
            try {
                const res = await axios.get(`${state.path}${page}${id}/recommendations?api_key=${rootState.apiKey}&language=ru-RU&page=1`)
                const data = res.data.results
                if (page == '/movie/') commit('getMovieRec', data)
                else commit('getTvRec', data)
                
            } catch (error) {
                console.log('Произошла ошибка при получении популярных фильмов', error);
            }
        }
    },
    getters:{
        getMovieRec: state => count => {
            return state.recommendMovie.slice(0, count)
        },
        getTvRec: state => count => {
            return state.recommendTv.slice(0, count)
        }
    }
}
