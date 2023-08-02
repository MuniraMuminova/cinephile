<template>
  <div class="main__info-content-actors">
    <div
      class="main__info-content-actor"
      v-for="actor in actors"
      :key="actor.id"
    >
      <img
        :src="imageUrl + actor.profile_path"
        alt=""
        class="main__info-content-img"
      />
      <span class="main__info-content-name">{{ actor.name }}</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      actors: null,
    };
  },
  props: ["type", "id", "count"],
  methods: {
    ...mapActions("actor", ["getActors"]),
  },
  computed: {
    ...mapState(["imageUrl"]),
    getCountActors() {
      const type = this.type == "/movie/" ? "getMovieActors" : "getTvActors";
      return this.$store.getters[`actor/${type}`](this.count);
    },
  },
  async mounted() {
    await this.getActors({ id: this.id, type: this.type });
    this.actors = this.getCountActors;
  },
  unmounted(){
    const reset = this.type == '/movie/' ? 'clearActorsMovie' : 'clearActorsTv'
    this.$store.commit(`actor/${reset}`)
  }
};
</script>

<style lang="scss">
.main__info-content-actors {
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.main__info-content-actor {
  background: rgba(20, 20, 20, 0.5);
  border: 1px solid #ffffff;
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 15px;
  & img {
    width: 45px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  & span {
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
  }
}
</style>