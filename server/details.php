<?php

// 1 接收前端数据
$id=$_REQUEST['pro_id'];
// 2 连接数据库
$con=mysqli_connect('localhost','root','root','shop');
// 3 书写sql语句
$sql="SELECT * FROM `product` WHERE `product_id`='$id'";
// 4 执行查询sql语句
$result=mysqli_query($con,$sql);
// 5 解析查询结果
$arr=mysqli_fetch_assoc($result);
// 6 返回json格式的数据
echo json_encode($arr);
//7 使用postman测试接口

?>