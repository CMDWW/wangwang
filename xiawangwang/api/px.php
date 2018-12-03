<?php
/**
 * @Author: Marte
 * @Date:   2018-11-16 20:18:29
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-26 19:29:27
 */
include  'connect.php';
//echo $name;//一定要做检测才往下面做

$num=isset($_GET['a']) ? $_GET['a']:'6';
//写查询语句
if($num==1){
    $sql="select*from goodslist order by nprice";
}else{
    $sql="select*from goodslist order by nprice desc";
}
//执行语句
$res=$conn->query($sql);
// print_r ($res);
//获取内容部分
$data=$res->fetch_all(MYSQLI_ASSOC);//获取内容部分
echo  json_encode($data);



?>