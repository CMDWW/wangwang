<?php
/**
 * @Author: Marte
 * @Date:   2018-11-26 11:21:45
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-26 15:51:41
 */
//连接数据库
    include 'connect.php';

     //接收参数
     $id = isset($_GET['id']) ? $_GET['id'] : '2';
    //  echo $cid;
    //写查询语句
    $sql2="select*from xqb where id=$id";
     $result2=$conn->query($sql2);//结果集
    // echo $result;  // 返回的是布尔值 
      $data=$result2->fetch_all(MYSQLI_ASSOC);//
          // echo json_encode($data);
          $id = $data[0]['id'];
          $a = $data[0]['src'];
          $b = $data[0]['price'];
          $c = $data[0]['name'];
          $d = $data[0]['num'];
          // var_dump($d);
     $sql="INSERT INTO shopc(id,images,price,title,qty) value ($id,'$a','$b','$c','$d')";
     // echo $sql;
         $result2->close();
     //执行语句
     $result=$conn->query($sql);//结果集
     // echo $result;  // 返回的是布尔值 0是false  1是true

    if($result){
        echo "插入成功";
    }
    else{
        echo "插入失败";
    }

    //关闭结果集和数据库
    // $result->close();
    $conn->close();
?>