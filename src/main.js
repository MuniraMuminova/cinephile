import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/main.scss';
// Импортируем icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
// Импортируем роуты
import routers from '@/routes'
// Импортируем vuex
import store from "@/store/index";
const app = createApp(App)
// UI
import BtnMore from "@/components/UI/BtnMore.vue";
import Actor from "@/components/UI/Actor.vue";
import BtnVideo from "@/components/UI/BtnVideo.vue";
// Vue-lazy
import VueLazyload from 'vue-lazyload'

const errorimage = require('@/assets/images/noimage.png')
app.use(VueLazyload, {
    error: errorimage,
  })

library.add(fas,far,fab)
app.component('fa', FontAwesomeIcon)
app.component('BtnMore', BtnMore)
app.component('Actor', Actor)
app.component('BtnVideo', BtnVideo)


app.use(routers)
app.use(store)
app.mount('#app')

