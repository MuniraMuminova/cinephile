"use strict";(self["webpackChunkcinephile"]=self["webpackChunkcinephile"]||[]).push([[788],{3461:function(t,n,e){e.d(n,{Z:function(){return C}});var o=e(3396),i=e(7139);const s={class:"container"},a={class:"main__content"},l={class:"main__content-title"},c={class:"main__content-list"};function r(t,n,e,r,u,p){const m=(0,o.up)("ContentItem");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",a,[(0,o._)("h2",l,(0,i.zw)("movie"==e.content?"Все фильмы":"Все сериалы"),1),(0,o._)("div",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.allMovies,(t=>((0,o.wg)(),(0,o.j4)(m,{key:t.id,item:t,content:e.content},null,8,["item","content"])))),128))])])])}e(7658);const u={alt:"",class:"main__content-img"},p={class:"main__content-name"};function m(t,n,e,s,a,l){const c=(0,o.up)("router-link"),r=(0,o.Q2)("lazy");return(0,o.wg)(),(0,o.j4)(c,{to:"#",class:"main__content-item"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("img",u,null,512),[[r,t.imageFullUrl+e.item.backdrop_path]]),(0,o._)("h2",p,(0,i.zw)(e.item.title||e.item.name),1)])),_:1})}var d=e(65),v={props:["content","item"],computed:{...(0,d.rn)(["imageFullUrl"])}},h=e(89);const g=(0,h.Z)(v,[["render",m]]);var _=g,w={components:{ContentItem:_},props:["content"],data(){return{page:1,loading:!1,allMovies:[]}},computed:{...(0,d.rn)("popularMovies",["popularMovies"]),...(0,d.rn)("popularTvs",["popularTvs"])},methods:{async getContent(){if(!this.loading){this.loading=!0;let t="movie"==this.content?"popularMovies/getPopular":"popularTvs/getPopular";await this.$store.dispatch(`${t}`,this.page);let n="movie"==this.content?this.popularMovies:this.popularTvs;this.allMovies.push(...n),this.loading=!1,this.page++}}},mounted(){window.addEventListener("scroll",(()=>{window.scrollY+window.innerHeight>=document.body.scrollHeight&&this.getContent()})),this.getContent()}};const f=(0,h.Z)(w,[["render",r]]);var C=f},8788:function(t,n,e){e.r(n),e.d(n,{default:function(){return u}});var o=e(3396);const i={class:"main"};function s(t,n,e,s,a,l){const c=(0,o.up)("ContentList");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(c,{content:"tv"})])}var a=e(3461),l={components:{ContentList:a.Z}},c=e(89);const r=(0,c.Z)(l,[["render",s]]);var u=r}}]);