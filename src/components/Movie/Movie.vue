<template>
  <section class="main__media" v-if="popularMovies">
    <router-link to="/movie" class="main__media-title">
      <span>Фильмы</span>
      <fa icon="chevron-right" class="main__media-arrow" />
    </router-link>
    <Swiper
      :modules="modules"
      :space-between="25"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
    >
      <SwiperSlide
        class="main__media-item"
        v-for="(movie, idx) in popularMovies"
        :key="movie.id"
        @click="getMovie(movie, idx)"
      >
        <img
          v-lazy="imageFullUrl + movie.poster_path"
          alt=""
          class="main__media-item-img"
        />
        <router-link :to="'/movie/' + movie.id" class="main__media-item-link">
          
        </router-link>
      </SwiperSlide>
      <SwiperSlide>
        <router-link to="/movie/" class="main__media-item">
          Все фильмы
        </router-link>
      </SwiperSlide>
    </Swiper>
    <InfoBlock 
    :selectedId="selectedId" 
    :selectedMovie="selectedMovie"
    :index="index"
    @close="selectedId = selectedMovie = null"
    page="/movie/"
    />
  </section>
  <div class="loading" v-else>
    <div class="loading__spiner"></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import InfoBlock from "@/components/InfoBlock/InfoBlock.vue";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

export default {
  data() {
    return {
      selectedId: null,
      selectedMovie: null,
      index: null,
      modules: [Navigation],
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1450: {
            slidesPerView: 5.5,
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    InfoBlock,
  },
  methods: {
    ...mapActions("popularMovies", ["getPopular"]),
    ...mapActions("movie", ["getMovieById"]),
    async getMovie(movie, idx) {
      this.selectedId = movie.id;
      this.selectedMovie = null;
      this.index = idx;
      await this.getMovieById(this.selectedId);
      this.selectedMovie = this.movie;
    },
  },
  computed: {
    ...mapState("popularMovies", ["popularMovies"]),
    ...mapState('movie', ['movie']),
    ...mapState(["imageFullUrl"]),
  },
  mounted() {
    this.getPopular();
  },
};
</script>

<style>
</style>