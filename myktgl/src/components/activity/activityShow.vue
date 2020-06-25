<template>
  <div>
    <mynav></mynav>
    <el-collapse v-model="activeName" accordion  v-for="(item,index) in list" :key="index">
      <el-collapse-item :title="item.per" :name="index+1">
         <div>活动标题：{{item.title}}</div>
         <div>活动简介：{{item.content}}</div>
         <div>举办时间：{{item.time}}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import mynav from './../common/mynav'
    export default {
    name:"activityShow",
    components:{
      mynav
    },
    data: () => ({
      list:[],
       activeName: '1'
    }),
    methods:{
  
    },
    mounted(){
            this.$axios.get("API/act").then(res=>{
                console.log(res.data.result.list)
                this.list=res.data.result.list
            })
        
    }
  }
</script>

<style>
 
</style>