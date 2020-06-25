<template>
<div class="myhome">
    <mynav></mynav>
    <div class="homeindex">
        <div class="home-head">
              <swiper :options="swiperOption">
                    <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index" :style="{'backgroundImage':`url('${item}.jpg')`}">
                          <div class="home-head-div">
                                <b class="b1">
                                  <p class="letter">知</p>
                                  <p class="letter">而</p>
                                  <p class="letter">好</p>
                                  <p class="letter">学</p>
                                </b>
                                <b class="b2">
                                  <p class="letter">笃</p>
                                  <p class="letter">信</p>
                                  <p class="letter">明</p>
                                  <p class="letter">志</p>
                                </b>
                          </div>
                    </swiper-slide>
              </swiper>
              <div class="swiper-pagination mypa" slot="pagination"></div>
              <!-- <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div> -->
        </div>
        <div class="home-body">
               <ul class="myul">
                 <li class="iconfont icon-xitong">
                   系统介绍
                 </li>
                 <li class="iconfont icon-huodong">
                   <p class="myul-p"><router-link to="/activityShow">活动展示</router-link></p>
                 </li>
                 <li class="iconfont icon-zuzhi">
                   <p class="myul-p"><router-link to="/organizationView">团务活动</router-link></p>
                 </li>
                 <li class="iconfont icon-yeji">
                   <p class="myul-p">课堂成绩</p>
                 </li>
               </ul>
        </div>
        <div class="home-footer">
            <div class="home-footer-div-1">
              <img src="./../../../static/image/code.jpg" width="70px" height="70px">
              <p>联系我们</p>
              <p>联系电话：19871350598</p>
            </div>
            <div class="home-footer-div">
              <i class="iconfont icon-biaozhunicon-">
                <p class="home-footer-div-p">第二课堂实践管理</p>
              </i>
            </div>
        </div>
        
    </div>
    
</div>
</template>

<script>
 import mynav from "./../common/mynav"
 import 'swiper/dist/css/swiper.css'
 import {swiper,swiperSlide} from 'vue-awesome-swiper'
 import '../../../static/font/iconfont.css'
export default {
  name: 'home',
  components:{
       mynav,
       swiper,
       swiperSlide,
  },
  data(){
    return{
      imgIndex:1,
      slide:[
        './../../../static/image/home',
        './../../../static/image/dier',
        './../../../static/image/login'
      ],
      swiperOption:{
        // 分页器配置
        pagination:{
             el:'.swiper-pagination',
             clickable:true,
        },
        // 箭头配置
        navigation:{
          nextE1:'.swiper-button-next',
          pervE1:'.swiper-button-prev',
        },
        // 自动切换图配置
        autoplay:{
          delay:4000,
          stopOnLastSlide:false,
          disableOnInteraction:false
        },
        loop:true,
        moudewheel:true,
        // 初始化slide的索引
        initialSlide:0,
      
        
      }
    }
  }
}
</script>

<style>

@import "./home.css"


</style>