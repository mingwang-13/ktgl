<template>
    <div class="newLogin">
        <el-form label-width="100px">
               <div>
                <el-form-item label="用户名" >
                   <el-input type="text" v-model="login.username"></el-input>
               </el-form-item>
               <el-form-item label="密码" >
                   <el-input type="password" v-model="login.password"></el-input>
               </el-form-item>
                <el-form-item label="请再次密码" >
                   <el-input type="password" v-model="login.password1"></el-input>
               </el-form-item>
               <el-form-item>
                    <el-button type="primary" @click="submit">提交</el-button>
                    <el-button @click="reset">重置</el-button>
               </el-form-item>
               </div>
        </el-form>
    </div>
</template>
<script>
  export default {
    data() {  
      return {
        login: {
          username: '',
          password: '',
          password1:''
        }, 
      };
    },
    methods: {
        submit() {
            if(!this.login.username){
               this.open()
            }else if( this.login.password !==this.login.password1){
                this.open1()
            }else{
                this.$axios.post('API/users/newLogin', {
                      username:this.login.username,
                      password:this.login.password,
                      adminer:false
                       }
                        ).then(res=>{
                               console.log(res)
                          })
                          this.open2()
                           window.location.href="http://localhost:8080"
                }
            },
         reset(){
               this.login.username=""
               this.login.password=""
               this.login.password1=""
             },
        open() {
              this.$message("请输入用户名");
           },
        open1(){
               this.$message("两次密码输入不一致"); 
           },
        open2(){
               this.$message("注册成功,请登录"); 
           }
      
       
  }
  }
</script>
<style>
@import "./newLogin.css"
</style>