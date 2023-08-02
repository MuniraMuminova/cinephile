<template><div class="main__id" v-if="currentInfo">
  <div class="main__medias" >
    <img :src="imageFullUrl + currentInfo.poster_path" alt="" class="main__medias-poster" />
    <div class="main__medias-block">
      <div class="main__medias-left">
        <h1 class="main__medias-left-title">{{ currentInfo.title || currentInfo.name}}</h1>
        <p class="main__medias-left-text">{{ currentInfo.overview }}</p>
        <p class="main__medias-left-janr">
          <span class="main__medias-date">  {{
                   new Date(currentInfo.release_date || currentInfo.first_air_date).getFullYear() 
                }}, </span>
          <span
                v-for="(genres, idx) in currentInfo.genres"
                :key="genres.id"
              >
                {{ genres.name }}
                <span v-if="idx < currentInfo.genres.length - 1"> , </span>
              </span>
        </p>
        <BtnVideo @click="video"  />
      </div>
      
    </div>
    <div class="main__medias-right">
      <img :src="imageFullUrl + currentInfo.backdrop_path" alt="" />
    </div>
      <div class="main__medias-actors">
        <h2 class="main__medias-title">В главных ролях</h2>
        <div class="main__medias-casts">
          <Actor :type="`/${type}/`"  :id="currentInfo.id" :count="6" />
        
      </div>
    </div>
    <Viedeo class="video" v-if="videoClick" :movie="movie"
    @close="videoClick = false"/> 
  </div>
  <RecMovie :page="`/${type}/`"  :id="currentInfo.id" :count="4"/>

</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import RecMovie from "@/components/Recommend/RecMovie.vue";
import Viedeo from "@/pages/Video.vue";
export default {
  props: ["currentInfo", 'type'],
  data() {
    return {
      videoClick: false,
      
    };
  },
  components: {
    Viedeo,
    RecMovie
  },
  methods: {
    ...mapActions("video", ["getVideos"]),
  async video(){
         this.getVideos({ id: this.$route.params.id, type: this.type });
         this.videoClick = true

    }
  },

  computed: {
    ...mapState(["imageFullUrl"]),
    ...mapState('video', ["movie", "tv"])
  },

};
</script>

<style>
.main__medias {
  position: relative;
  overflow: hidden;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  
}
</style>