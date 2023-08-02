<template>
  <div class="container">
    <div class="main__content">
        <h2 class="main__content-title">
            {{ content == 'movie' ? 'Все фильмы' : 'Все сериалы' }}
        </h2>
        <div class="main__content-list">
            <ContentItem
            v-for="item in allMovies"
            :key="item.id"
            :item="item"
            :content="content"
            />
        </div>
    </div>
  </div>
</template>

<script>
import ContentItem from "@/components/Content/ContentItem.vue";
import { mapState } from "vuex";
export default {
    components:{
        ContentItem
    },
    props: ['content'],
    data(){
        return{
            page: 1,
            loading: false,
            allMovies: []
        }
    },
    computed:{
        ...mapState('popularMovies',['popularMovies']),
        ...mapState('popularTvs',['popularTvs'])
    },
    methods:{
        async getContent(){
            if (!this.loading) {
                this.loading = true
                let data = this.content == 'movie' ? 'popularMovies/getPopular' : 'popularTvs/getPopular'
                await this.$store.dispatch(`${data}`,this.page)
                let action = this.content == 'movie' ? this.popularMovies : this.popularTvs
                this.allMovies.push(...action)
                this.loading = false
                this.page++
            }
        }
    },
    mounted(){
        window.addEventListener('scroll', () =>{
            if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                this.getContent() 
            }
        })
        this.getContent()
    }
}
</script>

<style>

</style>