var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var club = require('../models/club');
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/admin');
mongoose.connection.on("connected",function(){
    console.log("success")
});
mongoose.connection.on("error",function(){
    console.log("error")
});
mongoose.connection.on("disconnected",function(){
    console.log("fail")
});
router.get("/",function(req,res,next){
    club.find({}, function (err,doc) {
        if(err){
            res.json({
                        status:"1",
                        message:err.message
                     })
               }else{
                       res.json({
                           status:"0",
                           message:"",
                          result:{
                                   count:doc.length,
                                   list:doc
                                 }
                              })
        }
    })
});
router.post("/check",function(req,res,next){
    // var username = req.body.name
     var list = req.body.list
    list.forEach( function(item,index,list){
    club.findOneAndUpdate({"name":item},{$push:{"person":req.body.name}},function(){            
                         })
             })
             res.json({
                status:"0",
                message:"成功",
                result:''                       
            })
})
router.post("/drop",function(req,res,next){
    club.findOneAndUpdate({"name":req.body.name},{$pull:{"person":req.body.personName}},function(){    
        res.json({
            status:"0",
            message:"成功",
            result:''                       
            })        
                                       })
});
router.post("/out",function(req,res,next){
    club.find({person:{$elemMatch:{$eq:req.body.personName}}}, function (err,doc) {
     
                       res.json({
                           status:"0",
                           message:"",
                           result:{
                                   list:doc
                                 }
                              })
        
    })
});
                              
module.exports=router;