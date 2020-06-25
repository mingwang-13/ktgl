var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var act = require('../models/act');


router.get("/",function(req,res,next){
    act.find({}, function (err,doc) {
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
router.post("/publish",function(req,res,next){
    var param={
        per:req.body.per,
        title:req.body.title,
        content:req.body.content,
        time:req.body.time,
        show:req.body.show
    }
    act.create(param).then((doc)=>{
       
        res.json({
            status:"0",
            message:"发布成功",
            result:doc
               })
       
    })
 
})
router.post("/search",function(req,res,next){
    act.find({"per":req.body.per}).then((doc)=>{
        res.json({
            status:"0",
            message:"",
            result:doc
               })
    })
 
})
module.exports=router;
