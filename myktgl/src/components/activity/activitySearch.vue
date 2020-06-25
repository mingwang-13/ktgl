<template>
  <div>
    <mynav></mynav>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
           <el-form-item label="请输入社团名：">
                <el-select v-model="formInline.region">
                      <el-option label="篮球社" value="篮球社"></el-option>
                      <el-option label="轮滑社" value="轮滑社"></el-option>
                      <el-option label="文学社" value="文学社"></el-option>
                      <el-option label="美术社" value="美术社"></el-option>
                      <el-option label="话剧社" value="话剧社"></el-option>
                      <el-option label="棋艺社" value="棋艺社"></el-option>
               </el-select>
            </el-form-item>
          <el-form-item>
                   <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
         </el-form>
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
    name:"activitySearch",
    data: () => ({
      list:[],
       activeName: '1',
       formInline: {
          user: '',
          region: ''
        }
    }),
    components:{
      mynav
    },
    methods:{
           onSubmit() {
        // console.log(this.formInline.region);
             var per={
                 per:this.formInline.region
                }
                if(!this.formInline.region){
                  this.open1()
                    
                }else{
                this.$axios.post("API/act/search",per).then(res=>{
                 if(res.data.result.length==0){
                   this.open()
                      location.reload()
                 }else{
                   this.list=res.data.result
                   
                 }            
               })
            } 
         
      },
      open(){
        this.$message('该社团尚未发布活动')
      },
      open1(){
        this.$message("请选择社团")
      }
    },
  }
</script>

<style>
 
</style>