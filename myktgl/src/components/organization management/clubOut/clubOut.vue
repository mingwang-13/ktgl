<template>
    <div>
         <mynav></mynav>
    <div class="outdiv">      
        <div class="outdiv1">
            <el-row  v-for="(item,index) in list" :key="index">
                  <el-button type="text">  {{item.name}}</el-button>
            </el-row>
        </div>
        <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
        </el-select>
            <div>
              <el-row>
                  <el-button type="success" @click='drop'>点击退出</el-button>
              </el-row>
            </div>
    </div>
    </div>
</template>
<script>
import mynav from './../../common/mynav'
export default {
    name:'clubOut',
    components:{
        mynav
    },
    data(){
        return{
           options: [{
                value: '篮球社',
                label: '篮球社'
             }, {
                value: '轮滑社',
                label: '轮滑社'
            }, {
                value: '文学社',
                label: '文学社'
            }, {
                value: '美术社',
                label: '美术社'
             }, {
                value: '话剧社',
                label: '话剧社'
             },{
                value: '棋艺社',
                label: '棋艺社'
             }
             ],
           value: '',
           list:[]
            }
        },

    methods:{
        drop(){

            console.log(this.value)
            var person = sessionStorage.getItem("username");
                var param = {
                name:this.value,
                personName:person
            }
            if(!this.value){
                    this.open1()
                   }else{
            this.$axios.post('API/club/out',param).then(res=>{
                  console.log(res.data.result.list)
                  if(res.data.result.list.length==0){
                       this.open2()
                  }else{
                     this.$axios.post('API/club/drop',param).then(
                   res=>{
                    if(res.data.status=='0'){
                        this.open()  
                    }
                })
                  }

               })
               
            }
        },
       
        open() {
        this.$message('退出成功');
      },
        open1() {
        this.$message('请选择社团');
      },
        open2() {
        this.$message('你当前未加入社团');
      },
    }

}
</script>

<style>
@import "clubOut.css"
</style>