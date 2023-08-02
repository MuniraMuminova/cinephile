<template>
  <div class="container">
      <h3 class="title">Рекомендации</h3>
    <div class="recommend" >
      <div class="recommend__film"
      v-for="recommend in recommends"
      :key="recommend.id">

          <img :src="imageFullUrl + recommend.poster_path" alt="" class="recommend__film-img">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState} from "vuex";
export default {
    data(){
        return{
recommends: null,
        }
    },
  props: ['page', 'id', 'count'],
  methods: {
    ...mapActions("recommend", ["getRecommend"]),
  },
  computed: {
    ...mapState(["imageFullUrl"]),
    getCountRec() {
      const type = this.page == "/movie/" ? "getMovieRec" : "getTvRec";
      return this.$store.getters[`recommend/${type}`](this.count);
    },
  },
  async mounted() {
    await this.getRecommend({ id: this.id, page: this.page});
    this.recommends = this.getCountRec;
  },
  unmounted(){
    const reset = this.page == '/movie/' ? 'clearRecMovie' : 'clearRecMovie'
    this.$store.commit(`recommend/${reset}`)
  }
};
</script >

<style  >

  

</style>