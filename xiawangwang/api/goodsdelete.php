<?php
    //连接数据库
    include 'connect.php';

     //接收参数
     $id = isset($_GET['id']) ? $_GET['id'] : '2';
    //  echo $cid;
    //写查询语句
    $sql = "DELETE FROM shopc  where id='$id'";
    
    //执行语句
    $result=$conn->query($sql);//结果集
    // echo $result;  // 返回的是布尔值 0是false  1是true

    if($result){
        // echo 'yes';  //返回的yes证明删除成功了
        $sql2='SELECT * FROM  shopc';
        $result2=$conn->query($sql2);
        //结果集  得到所有结果
        $res = $result2->fetch_all(MYSQLI_ASSOC);
        echo json_encode($res);
    }else{
        echo 'no';
    }

    //关闭结果集和数据库
	$result2->close();
	$conn->close();

    
?>