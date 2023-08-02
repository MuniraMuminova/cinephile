<template>
  <main class="main">
    <Upcoming/>
    <Movie/>
    <Tvs/>
    <TopRate/>
    
  </main>
</template>

<script>
import Upcoming from "@/components/Upcoming/Upcoming.vue";
import Movie from "@/components/Movie/Movie.vue";
import Tvs from "@/components/Tvs/Tvs.vue";
import TopRate from "@/components/Top10/TopRate.vue";

export default {
  components: {
    Upcoming,
    Movie,
    Tvs,
    TopRate
    
  },
};
</script>

<style>
</style>