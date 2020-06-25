<template>
<div>
  <mynav></mynav>
   <div>
     <div class="myhead">
       <div class="myhead1">姓名</div>
       <div class="myhead1">班级</div>
        <div class="myhead1">要加入的社团</div>
        <div class="myhead1">操作</div>
     </div>
    <div class="mybody" v-for="(item,index) in list" :key="index">
      <div class="mybody1">{{item.applyName}}</div>
      <div class="mybody1">{{item.class}}</div>
      <div class="mybody1">
        <div  class="mybody2"  v-for="(item1,index1) in item.clubList" :key="index1">
          {{item1}}
        </div>
      </div>
      <div class="mybody3"> <el-button type='success' v-on:click="audit(item.clubList,item.applyName);dropApply(item.applyName)">同意</el-button></div>
    </div>
   </div>

</div>
</template>

<script>
import mynav from './../../common/mynav'
  export default {
      name:'audit',
      components:{
        mynav
      },
     data() {
      return {
        list:[],
        multipleSelection:[]
      }
    },
    created(){
        this.$axios.get('API/apply/audit').then(res=>{
             console.log(res)
              this.list=res.data.result
        })
    },
  methods:{
       audit(parm1,parm2){
         var param = {
           list:parm1,
           name:parm2
         }
         this.$axios.post('API/club/check',param).then(res=>{
           this.open()
           console.log(res)
         })

       },
        open() {
        this.$message('审核通过');
      },
      dropApply(parm){
        var param={
          name:parm
        }
        this.$axios.post('API/apply/drop',param).then(res=>{
          // console.log(res)
          location.reload()
        })
      }

  }
    
 
    
  }
</script>
<style>
@import './audit.css'
</style>