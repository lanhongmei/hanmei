<?php
/*     
接收POST请求
请求参数是:username和password
返回结果:
    用户名已经被注册,返回{code:0,msg:"用户名已被注册"}
    注册成功:{code:1,data:{username:"lisi"}}
    注册失败:{code:0,msg:"后端出错了"}
*/

// 1 接收前端数据
$usernum=$_REQUEST['usernum'];
$password=$_REQUEST['password'];
// 2 连接数据库
$con=mysqli_connect('localhost','root','root','music');
// 3 书写SQL查询语句
$sql="SELECT * FROM `user` WHERE `usernum`='$usernum'";
// 4 执行SQL语句
$result=mysqli_query($con,$sql);
// 5 解析查询结果
$data=mysqli_fetch_assoc($result);
if($data){
    // 如果查询到,说明该用户已经存在于数据库,无法注册了
    $arr=array('code'=>0,'msg'=>'用户名已被注册');
}else{
    // 如果没查询到,可以注册,书写插入的sql语句(不用解析,结果是布尔值)
    $sql="INSERT INTO `user` (`usernum`,`password`) VALUES ('$usernum','$password')";
    // 执行插入语句
    $result=mysqli_query($con,$sql);
    if($result){
        $arr=array('code'=>1,'data'=>array('usernum'=>$usernum));
    }else{
        $arr=array('code'=>0,'msg'=>'后端出现错误');
    }
}
// 6 给前端返回json数据
echo json_encode($arr);
// 7 测试接口

?>