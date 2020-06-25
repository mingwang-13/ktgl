var express = require('express');
var router = express.Router();

var User = require("./../models/user")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/login",function(req,res,next){
  var param = {
    username:req.body.username,
    password:req.body.password
  }
  User.findOne(param).then(result=>{
        if(result){
        //           res.cookie("userId",result.username,{
        //           path:'/',
        //           maxAge:1000*60*60
        // });
          res.json({
                  status:'0',
                  msg:'',
                  result:{
                    username:result.username,
                    password:result.password,
                    adminer:result.adminer
                  }
                })
        }else{
          res.json({
                status:'1',
                msg:'账户名密码错误'
              });
        }
  })  
});
router.post("/newLogin",function(req,res,next){
  var param = {
    username:req.body.username,
    password:req.body.password,
    adminer:req.body.adminer,
  }
  User.create(param).then(result=>{
        if(result){
          res.json({
                  status:'0',
                  msg:'',
                  result:result
                })
        }else{
          res.json({
                status:'1',
                msg:'注册失败'
              });
        }
  })  
});
module.exports = router;
