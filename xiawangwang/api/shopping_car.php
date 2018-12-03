<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'kaola';
    
    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);

    // 检测连接是否成功
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    
    


    $sql="SELECT * FROM shopc";
    //执行语句：得到结果集
    $res=$conn->query($sql);
    
    //获取内容部分
    $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容部分

    // var_dump($data);
    echo json_encode($data);
?>