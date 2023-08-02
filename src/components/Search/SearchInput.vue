<template>
  <div class="container">
    <div class="main__search">
      <input
        type="text"
        class="main__search-input"
        :placeholder="placeholder"
        v-model="value"
      />
    </div>
    <div class="main__content-list" v-if="searchdata">
      <SearchContent
       v-for="item in searchdata" 
       :key="item.id" 
       :item="item" />
    </div>
  </div>
</template>

<script>
import SearchContent from "@/components/Search/SearchContent.vue";
import { mapState } from "vuex";
export default {
  components: {
    SearchContent,
  },
  props: ["placeholder"],
  data() {
    return {
      value: "",
    };
  },
  watch: {
    value(newVal) {
      this.$store.dispatch("searching/getSearchData", this.value);
    },
  },
  computed: {
    ...mapState("searching", ["searchdata"]),
  },
  unmounted(){
    this.$store.commit('searching/resetSearch')
  }
};
</script>

<style>
</style>