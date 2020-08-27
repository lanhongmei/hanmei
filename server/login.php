<?php
/*
流程:前端-->后端-->数据库-->后端-->前端
   
前端通过表单收集用户信息发送给后端:username和password
后端把接收到的username和password去数据库里查询,然后把查询结果返回给后端
后端把查询结果返回给前端:
    如果数据库能查询到该用户,返回:{code:1,data:{username:"zhangsan"}}给前端
    如果数据库没有查询到该用户,返回:{code:0,msg:"用户名或密码错误"}给前端
    前端接收到结果以后渲染到页面上:
    如果code==1,跳转到购物车页面,并显示:欢迎您,xxxx
    如果code==0,显示用户名或密码错误,请重新登陆
*/
// 1 接收前端数据
$usernum=$_POST['usernum'];
$password=$_POST['password'];
// 2 连接数据库
$con=mysqli_connect('localhost','root','root','music');
// 3 书写sql语句
$sql="SELECT * FROM `user` WHERE `usernum`='$usernum' AND `password`='$password'";
// 4 执行查询sql语句
$result=mysqli_query($con,$sql);
// 5 解析查询结果
$data=mysqli_fetch_assoc($result);
if($data){
    $arr=array('code'=>1,'data'=>array('usernum'=>$usernum));
}else{
    $arr=array('code'=>0,'msg'=>'用户名或密码错误');
}
// 6 返回json格式的数据
echo json_encode($arr);
//7 使用postman测试接口

?>