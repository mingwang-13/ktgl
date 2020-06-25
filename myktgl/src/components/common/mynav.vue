<template>
<div class="mynav">
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo ele"
  mode="horizontal"
  :router="str"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  >
  <a href="http://localhost:8080/#/home" class="home">首页</a>
    <el-submenu index="2">
    <template slot="title">社团管理</template>
    <el-menu-item :index="adminer?'/audit':'/err'">社团审核</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">信息编辑</template>
      <el-menu-item index="/organizationView">浏览</el-menu-item>
      <el-menu-item index="/applyjoin">申请加入</el-menu-item>
      <el-menu-item index="/clubOut">退出社团</el-menu-item>
    </el-submenu>
  </el-submenu>
    <el-submenu index="3">
    <template slot="title">团务管理</template>
    <el-menu-item index="/activitySearch">活动查询</el-menu-item>
  </el-submenu>
    <el-submenu index="4">
    <template slot="title">活动管理</template>
    <el-menu-item index="/activityShow">活动展示</el-menu-item>
    <el-menu-item :index="adminer?'/publish':'/err'">快速发布</el-menu-item>
  </el-submenu>
<a href="http://localhost:8080/#/self" class="home">个人中心</a>
</el-menu>
</div>
</template>
<script>
  export default {
    name:"mynav",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        str:true,
        adminer:''
      };
    },
    created(){
        if(sessionStorage.getItem("isAdminer")=='true'){
               this.adminer=true
        }else{
               this.adminer=false
        }
        console.log(this.adminer)
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
.mynav{
  display: flex;
 

}
.ele{
  width: 100%;
  display: flex;
  justify-content: center;
}
.home{
  display: block;
  text-align: center;
  line-height: 60px;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  margin-right: 40px;
  cursor: pointer;
  outline: none;
}
</style>