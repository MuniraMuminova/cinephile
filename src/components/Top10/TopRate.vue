<template>
  <section class="main__rate" v-if="topRate">
    <h2 class="main__rate-title">
      ТОП
      <span>10</span>
    </h2>
    <Swiper
      :modules="modules"
      :space-between="25"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
    >
      <SwiperSlide
        class="main__rate-item"
        v-for="(item, idx) in topRate"
        :key="item.id"
      >
        <div class="main__rate-info">
          <p>{{ idx + 1 }}</p>
        </div>
        <img
          :src="imageFullUrl + item.poster_path"
          alt=""
          class="main__rate-img"
        />
      </SwiperSlide>
    </Swiper>
  </section>
  <div class="loading" v-else>
    <div class="loading__spiner"></div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
export default {
  data() {
    return {
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
            slidesPerView: 3.3,
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    ...mapActions("topRate", ["getTop"]),
  },
  computed: {
    ...mapState("topRate", ["topRate"]),
    ...mapState(["imageFullUrl"]),
  },
  mounted() {
    this.getTop();
  },
};
</script>

<style>
</style>