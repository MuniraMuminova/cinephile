import axios from "axios";

export default {
    namespaced: true,
    state: {
        path: '//api.themoviedb.org/3/search/multi',
        searchdata: null
    },
    mutations: {
        getSearchData(state, payload) {
            state.searchdata = payload
        },
        resetSearch(state) {
            state.searchdata = null
        }
    },
    actions: {
        async getSearchData({ commit, state, rootState }, search) {
            try {
                const res = await axios.get(`${state.path}?api_key=${rootState.apiKey}&query=${search}&include_adult=false&language=ru-RU&page=1`)
                const data = res.data.results
                console.log(data);

                commit('getSearchData', data)
            } catch (error) {
                console.log('Произошла ошибка при получении популярных фильмов', error);
            }
        }
    },
    getters: {}
}