"use strict";(self["webpackChunkcinephile"]=self["webpackChunkcinephile"]||[]).push([[793,213],{2129:function(e,t,n){n.d(t,{Z:function(){return x}});var i=n(3396);const r={class:"main__contentId"};function o(e,t,n,o,s,c){const a=(0,i.up)("Intro");return(0,i.wg)(),(0,i.iD)("main",r,[(0,i.Wm)(a,{type:n.type,currentInfo:s.currentInfo},null,8,["type","currentInfo"])])}var s=n(7139);const c={key:0,class:"main__id"},a={class:"main__medias"},l=["src"],d={class:"main__medias-block"},m={class:"main__medias-left"},u={class:"main__medias-left-title"},p={class:"main__medias-left-text"},_={class:"main__medias-left-janr"},v={class:"main__medias-date"},f={key:0},g={class:"main__medias-right"},h=["src"],y={class:"main__medias-actors"},k=(0,i._)("h2",{class:"main__medias-title"},"В главных ролях",-1),I={class:"main__medias-casts"};function w(e,t,n,r,o,w){const C=(0,i.up)("BtnVideo"),$=(0,i.up)("Actor"),D=(0,i.up)("Viedeo"),R=(0,i.up)("RecMovie");return n.currentInfo?((0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",a,[(0,i._)("img",{src:e.imageFullUrl+n.currentInfo.poster_path,alt:"",class:"main__medias-poster"},null,8,l),(0,i._)("div",d,[(0,i._)("div",m,[(0,i._)("h1",u,(0,s.zw)(n.currentInfo.title||n.currentInfo.name),1),(0,i._)("p",p,(0,s.zw)(n.currentInfo.overview),1),(0,i._)("p",_,[(0,i._)("span",v,(0,s.zw)(new Date(n.currentInfo.release_date||n.currentInfo.first_air_date).getFullYear())+", ",1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.currentInfo.genres,((e,t)=>((0,i.wg)(),(0,i.iD)("span",{key:e.id},[(0,i.Uk)((0,s.zw)(e.name)+" ",1),t<n.currentInfo.genres.length-1?((0,i.wg)(),(0,i.iD)("span",f," , ")):(0,i.kq)("",!0)])))),128))]),(0,i.Wm)(C,{onClick:w.video},null,8,["onClick"])])]),(0,i._)("div",g,[(0,i._)("img",{src:e.imageFullUrl+n.currentInfo.backdrop_path,alt:""},null,8,h)]),(0,i._)("div",y,[k,(0,i._)("div",I,[(0,i.Wm)($,{type:`/${n.type}/`,id:n.currentInfo.id,count:6},null,8,["type","id"])])]),o.videoClick?((0,i.wg)(),(0,i.j4)(D,{key:0,class:"video",movie:e.movie,onClose:t[0]||(t[0]=e=>o.videoClick=!1)},null,8,["movie"])):(0,i.kq)("",!0)]),(0,i.Wm)(R,{page:`/${n.type}/`,id:n.currentInfo.id,count:4},null,8,["page","id"])])):(0,i.kq)("",!0)}var C=n(65);const $={class:"container"},D=(0,i._)("h3",{class:"title"},"Рекомендации",-1),R={class:"recommend"},Z=["src"];function b(e,t,n,r,o,s){return(0,i.wg)(),(0,i.iD)("div",$,[D,(0,i._)("div",R,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.recommends,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"recommend__film",key:t.id},[(0,i._)("img",{src:e.imageFullUrl+t.poster_path,alt:"",class:"recommend__film-img"},null,8,Z)])))),128))])])}var F={data(){return{recommends:null}},props:["page","id","count"],methods:{...(0,C.nv)("recommend",["getRecommend"])},computed:{...(0,C.rn)(["imageFullUrl"]),getCountRec(){const e="/movie/"==this.page?"getMovieRec":"getTvRec";return this.$store.getters[`recommend/${e}`](this.count)}},async mounted(){await this.getRecommend({id:this.id,page:this.page}),this.recommends=this.getCountRec},unmounted(){const e=(this.page,"clearRecMovie");this.$store.commit(`recommend/${e}`)}},M=n(89);const U=(0,M.Z)(F,[["render",b]]);var V=U,W=n(2213),q={props:["currentInfo","type"],data(){return{videoClick:!1}},components:{Viedeo:W["default"],RecMovie:V},methods:{...(0,C.nv)("video",["getVideos"]),async video(){this.getVideos({id:this.$route.params.id,type:this.type}),this.videoClick=!0}},computed:{...(0,C.rn)(["imageFullUrl"]),...(0,C.rn)("video",["movie","tv"])}};const z=(0,M.Z)(q,[["render",w]]);var j=z,A={props:["type"],data(){return{currentInfo:null}},components:{Intro:j},methods:{...(0,C.nv)("infoId",["getMedia"])},computed:{getCountActors(){const e="movie"==this.type?"movie":"tv";return this.$store.state.infoId[`${e}`]}},async mounted(){await this.getMedia({id:this.$route.params.id,type:this.type}),this.currentInfo=this.getCountActors}};const Y=(0,M.Z)(A,[["render",o]]);var x=Y},4793:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var i=n(3396);function r(e,t,n,r,o,s){const c=(0,i.up)("ContentId");return(0,i.wg)(),(0,i.j4)(c,{type:"movie"})}var o=n(2129),s={components:{ContentId:o.Z}},c=n(89);const a=(0,c.Z)(s,[["render",r]]);var l=a},2213:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var i=n(3396);const r={key:0,class:"block"},o=["src"];function s(e,t,n,s,c,a){const l=(0,i.up)("fa");return n.movie?((0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(l,{icon:"xmark",class:"main__info-close",onClick:t[0]||(t[0]=t=>e.$emit("close"))}),(0,i._)("iframe",{src:n.movie,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"},null,8,o)])):(0,i.kq)("",!0)}var c={props:["movie"]},a=n(89);const l=(0,a.Z)(c,[["render",s]]);var d=l}}]);