<template>
  <router-link to="#" class="main__content-item">
    <img v-lazy="imageFullUrl + item.backdrop_path" alt="" class="main__content-img" />
    <h2 class="main__content-name">{{ item.title || item.name}}</h2>
  </router-link>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["content", "item"],
  computed:{
    ...mapState(['imageFullUrl'])
  }
};
</script>

<style>
</style>