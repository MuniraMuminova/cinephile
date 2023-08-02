import axios from "axios";

export default {
    namespaced: true,
    state: {
        path: 'https://api.themoviedb.org/3/tv/top_rated',
        topRate: null
    },
    mutations:{
        getTop(state, payload){
            state.topRate = payload
        }
    },
    actions:{
        async getTop({commit, state, rootState}){
            try {
                const res = await axios.get(`${state.path}?api_key=${rootState.apiKey}&language=ru-RU&page=1`)
                const data = res.data.results
                const top10 = []
                data.forEach(item => {
                    if (top10.length < 10) {
                        top10.push(item)
                    }
                });
                commit('getTop', top10)
            } catch (error) {
                console.log('Произошла ошибка при получении топовых фильмов', error);
            }
        }
    },
    getters:{
    }
}