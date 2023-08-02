<template>
<Transition name="upcoming" mode="out-in">
    <section class="main__upcoming" v-if="upcomings != ''">
    <UpcomingItem 
    v-for="(movie, idx) in upcomings"
    :key="movie.id"
    :movie="movie"
    :idx="idx"
    :slideView="slideView"
    :next="upcomings[idx + 1 == upcomings.length ? 0 : idx + 1]"
    @slideNext="slideNext"
    />
  </section>
  <div class="loading" v-else>
    <div class="loading__spiner"></div>
  </div>
</Transition>

</template>

<script>
import UpcomingItem from "@/components/Upcoming/UpcomingItem.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    UpcomingItem,
  },
  data() {
    return {
      upcomings: null,
      slideView: 0,
      timeout: null
    };
  },
  methods: {
    ...mapActions("upcoming", ["getUpcoming"]),
    slide(){
      if(this.upcomings.length - 1 == this.slideView){
        this.slideView = 0
      }else{
        this.slideView++
      }
      this.timeout = setTimeout(this.slide, 10000);
    },
    slideNext(){
      clearTimeout(this.timeout)
      this.slide()
     }
  },
  computed: {
    ...mapState("upcoming", ["upcoming"]),
  },
  async mounted() {
    await this.getUpcoming();
    this.upcomings = this.upcoming;
    this.timeout = setTimeout(this.slide, 10000)
  },
};
</script>

<style>
</style>