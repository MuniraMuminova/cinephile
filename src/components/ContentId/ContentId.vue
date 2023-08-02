
<template>
  <main class="main__contentId">
    <Intro :type="type" :currentInfo="currentInfo"/>
  </main>
</template>

<script>
import Intro from "@/components/ContentId/Intro.vue";
import { mapState, mapActions } from "vuex";
export default {
  props: ["type"],
  data() {
    return {
      currentInfo: null,
    };
  },
  components: {
    Intro,
  },
  methods: {
    ...mapActions("infoId", ["getMedia"]),
  },
  computed: {
    getCountActors() {
      const type = this.type == "movie" ? "movie" : "tv";
      return this.$store.state.infoId[`${type}`];
    },
  },
  async mounted() {
    await this.getMedia({ id: this.$route.params.id, type: this.type });
    this.currentInfo = this.getCountActors;
  },
};
</script>

<style>
</style>