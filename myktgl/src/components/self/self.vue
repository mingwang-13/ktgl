<template>
<div>
  <mynav></mynav>
  <div class="myself">
         <div class="mybtn">
              <el-row type="success">
            姓名:&nbsp;{{name}}
              </el-row>
        </div> 
            <div class="mybtn">
              <el-row>
                  班级:&nbsp;{{myclass}}
              </el-row>
        </div> 
           <div class="selfdiv">所在社团：
            <el-row  v-for="(item,index) in list" :key="index">
                   {{item.name}}
            </el-row>
        </div>
            <div class="mybtn">
              <el-row>
                  <el-button type="success" @click='out'>退出登录</el-button>
              </el-row>
        </div> 
        
</div>
</div>
</template>

<script>
import mynav from './../common/mynav'
export default {
  name: 'self',
  components:{
      mynav
  },
  data() {
    return{
       list:[],
       name:'',
       myclass:'',
       show:true
    }
    },
    created(){
                var person = sessionStorage.getItem("username");
                var mycls = sessionStorage.getItem("class");
                this.myclass=mycls
                this.name=person   
                var param ={
                    personName:person
                } 
                 this.$axios.post('API/club/out',param).then(res=>{
                  console.log(res.data.result.list)
                  if(res.data.result.list.length==0){
                     this.list=[]
                  }else{
                      this.list=res.data.result.list
                  }

               })
    },
    methods:{
         out(){
             sessionStorage.clear()
            window.location.href="http://localhost:8080"
         },
        open2() {
        this.$message('你当前未加入社团');
        },
    }
}
</script>

<style>
@import './self.css'
</style>