const express=require('express');
//创建路由器对象
var router=express.Router();
//添加路由
//get  /login
router.get('/login',function(req,res){
  res.send('这是注册');
});
//导出路由器对象
module.exports=router;