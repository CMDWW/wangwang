<?php
/**
 * @Author: Marte
 * @Date:   2018-11-13 12:13:43
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-22 22:35:07
 */
    include 'connect.php';//相当于复制connect.php的文件内容过这里
    $sql="SELECT * FROM goodslist";
    //执行语句：得到结果集
    $res=$conn->query($sql);
    
    //获取内容部分
    $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容部分

    // var_dump($data);
    echo json_encode($data);


?>