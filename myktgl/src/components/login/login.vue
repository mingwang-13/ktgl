<template>
  <div class="login">
        <p class="mytitle">第二课堂实践管理</p>
        <div class="login-frame">
        <el-form ref="loginFormRef" :model="loginForm" label-width="20px" class="myform" :rules="loginRules">
            <el-form-item  class="login-el" prop="username">
                <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
            </el-form-item>
               <el-form-item  class="login-el" prop="password">
                <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
            </el-form-item>
            <div class="myfor-div">
                <!-- <p> <router-link to="/home">登录</router-link></p> -->
                <p @click="login">登录</p>
                <p><router-link to="/newLogin">注册</router-link></p>
            </div>
        </el-form>
        </div>
  </div>

</template>

<script>
export default {
  name: 'login',
  data(){
    return{
      // 登录表单的数据对象
      loginForm:{
        username:'admin',
        password:'123456'
      },
      // 登录的验证规则
      loginRules:{
        // 验证用户名是否合法
           username:[
             {required:true,message:"请输入用户名",trigger:"blur"},
             {min:3,max:10,message:"长度在3到10个字符",trigger:"blur"}
           ],
        //  验证密码是否合法
           password:[
               {required:true,message:"请输入密码",trigger:"blur"},
               {min:6,max:15,message:"长度在6到15个字符",trigger:"blur"}
           ],
      },
      show:false
    }
  },
  methods:{
    login(){
      this.$axios.post('API/users/login', {
            username:this.loginForm.username,
            password:this.loginForm.password
      }
      ).then( (response) =>{
        //  console.log(response.data.result)
       
          if(response.data.msg){
            this.open()
          }else{
            sessionStorage.setItem("isAdminer",response.data.result.adminer);
            sessionStorage.setItem("isLogin",true);
            sessionStorage.setItem("username",response.data.result.username);
            window.location.href="http://localhost:8080/#/home"
          }
      })
    },
    open() {
        this.$message('用户名或密码错误');
      },

  }
}
</script>
<style>
@import "./login.css"
</style>