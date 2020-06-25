// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
// import VueBus from 'vue-bus'
Vue.prototype.$axios = axios

Vue.use(ElementUI)
Vue.use(vueSwiper)
// Vue.use(VueBus)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to,from,next) =>{ 
   if(sessionStorage.getItem("isLogin")){
    next();
    }else{
      if(to.path==="/"){
        next();
       }if(to.path==="/newLogin"){
        next();
       }
       else{
         next({path:"/"})
       }
   } 
  })
