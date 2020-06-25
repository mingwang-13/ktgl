var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var apply = require('../models/apply');


router.post("/",function(req,res,next){
    var param = {
        applyName:req.body.name,
        clubList:req.body.checkList,
        class:req.body.class,
    }
    apply.create(param).then((doc)=>{
       
        res.json({
            status:"0",
            message:"成功",
            result:doc
               })
       
    })
});
router.get('/audit',function(req,res,next){
    apply.find().then( result=>{
        res.json({
            status:"0",
            message:"成功",
            result:result
               })
    })
})
router.post('/drop',function(req,res,next){
    apply.remove({applyName:req.body.name}).then( result=>{
        res.json({
            status:"0",
            message:"成功",
            result:result
               })
    })
})

module.exports=router;