import axios from 'axios'
export default {
    namespaced: true,
    state: {
        path: 'https://api.themoviedb.org/3/',
        movie: null,
        tv: null
    },
    mutations:{
        currentMovie(state, payload){
            state.movie = payload
        },
        currentTv(state, payload){
            state.tv = payload
        }
    },
    actions:{
        async getMedia({commit, state, rootState}, infoid){
            const {type, id} = infoid
            try {
                const res = await axios.get(`${state.path}${type}/${id}?api_key=${rootState.apiKey}&language=ru-RU&page=1`)
                const data = res.data
console.log(data);
                if (type == 'movie') {
                    commit('currentMovie', data)
                }else{
                    commit('currentTv', data)
                }
            } catch (error) {
                console.log('Ошибка при получении популярных фильмов по id', error);
            }
        }
    },
    getters:{
        
    }
}