<template>
  <div>
    <mynav></mynav>
     <div class="apply-div">
       <div class="bg" style="background-image:url(./../../../../../static/image/apply1.png)">
           <div class="myselect">
                 <el-checkbox-group v-model="checkList">
                      <el-checkbox label="篮球社"></el-checkbox>
                      <el-checkbox label="轮滑社"></el-checkbox>
                      <el-checkbox label="文学社"></el-checkbox>
                      <el-checkbox label="美术社"></el-checkbox>
                      <el-checkbox label="话剧社"></el-checkbox>
                      <el-checkbox label="棋艺社"></el-checkbox>
                 </el-checkbox-group>
            </div>
            <div class="myapply">
                  <div>姓名：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="请输入姓名" v-model="name"></div>
                  <div class="myapply-div">班级：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="请输入班级" v-model="myclass"></div>
            </div>
            <div class="mybtn">
              <el-row>
                  <el-button type="text" @click="open">点击申请</el-button>
              </el-row>
            </div>
    </div>
  </div>
  </div>
</template>

<script>
import mynav from './../../common/mynav'
export default {
  name: 'applyjoin',
  components:{
   mynav
  },
  data () {
      return {
        checkList:[],
        name:'',
        myclass:''
      };
    },
  methods: {
      open() {
         var param={
          name:this.name,
          checkList:this.checkList,
          class:this.myclass
        }
          this.$axios.post("API/apply",param).then((response) => {
              sessionStorage.setItem("class",this.myclass);
           this.$alert('审核中,请等待管理员审核', '标题名称', {
           confirmButtonText: '确定',
        });
      })
      

    },
      open1() {
        this.$message('请正确填入');
      },
  }
}
</script>

<style lang="scss" scoped>
@import "./applyjoin.scss"
</style>
