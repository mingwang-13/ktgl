<template>
    <div>
        <mynav></mynav>
        <el-radio-group v-model="labelPosition" size="small">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
       <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="名称">
                     <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="活动标题">
                    <el-input v-model="formLabelAlign.title"></el-input>
                 </el-form-item>
                <el-form-item label="活动简介">
                    <el-input v-model="formLabelAlign.content"></el-input>
                </el-form-item>
                <el-form-item label="举办时间">
                    <el-input v-model="formLabelAlign.time"></el-input>
                </el-form-item>
        </el-form>
        <el-row>
                <el-button @click="fb" :disabled=showButton>点击发布</el-button>
       </el-row>
    </div>
</template>
<script>
import mynav from './../common/mynav'
  export default {
      name:'publish',
      components:{
          mynav
      },
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '轮滑社',
          title: '轮滑比赛',
          content: '欢迎大家参与',
          time:'2020.1.6',
          show:"false"
        },
        showButton:false
      };
    },
    methods:{
        fb(){
            var admin=sessionStorage.getItem("isAdminer")
            if(admin=="false"){
              this.showButton=!this.showButton
              this.open1()
            }else{
                var obj = {
                   per:this.formLabelAlign.name,
                   title:this.formLabelAlign.title,
                   content:this.formLabelAlign.content,
                   time:this.formLabelAlign.time,
                   show:this.formLabelAlign.show,
                  }
             this.$axios.post("API/act/publish",obj).then((response) => {
                this.open()
            
             })
            }
    
        },
        open() {
        this.$message('发布成功');
      },
        open1() {
        this.$message('你当前无权限');
      },
    }
  }
</script>
