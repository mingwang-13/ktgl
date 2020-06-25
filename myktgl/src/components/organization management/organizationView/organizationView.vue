<template>
     <div>
         <mynav></mynav>
         <div class="mydiv">
                  <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item  :name="index+1" :title="item.name" v-for="(item,index) in clubList" :key="index">    
                            <div class="el-div1">{{item.introduction}}</div>
                         <div class="el-div2">
                             <div class="el-div3">
                                <el-carousel :interval="2000" type="card" height="200px">
                                            <el-carousel-item v-for="item2 in 6" :key="item2">
                                                 <h3 class="medium"><img :src="'./../../../../static/image/'+item.image" width="400px" height="200px"></h3>
                                            </el-carousel-item>
                              </el-carousel> 
                              <!-- <img :src="'./../../../../static/image/'+item.image" width="400px" height="200px"> -->
                         </div>
                             <div class="el-div4">社团成员展示：
                                   <div class="el-div4"  v-for="(item1,index1) in item.person" :key="index1">
                                        <span>{{item1}}</span>
                                   </div>
                             </div>
                         </div>
                        </el-collapse-item>
                    </el-collapse>
         </div>
    </div>
</template>

<script>
import mynav from "./../../common/mynav"
export default {
  name: 'organizationView',
    data() {
      return {
        activeNames: ['1'],
        clubList:[]
      };
    },
    components:{
        mynav,
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    },
    mounted(){
      this.$axios.get("API/club").then((response) => {
        let res = response.data;
        if(res.status=="0"){
          this.clubList = res.result.list;
          console.log(this.clubList);
        }else{
          this.clubList = [];
        }
      })
    }
  }
</script>



<style>
@import "./organizationView.css"
</style>
