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

    $username = isset($_POST['username']) ? $_POST['username'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;
    // $password = md5($password);
    
    $sql = "INSERT INTO zc (username,password) VALUES('$username','$password')";
    $zenjia = $conn->query($sql);


    $sql1 = "SELECT * FROM zc WHERE username='$username' AND password='$password' ";

    // 读取数据
    // 获取查询结果集（集合）
    $result = $conn->query($sql1);

    // 从集合中取出所有数据
    // var_dump($result);
    $row = $result->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集，避免资源浪费
    $result->close();
    // 关闭数据库，避免资源浪费
    $conn->close();
    if($row){
        echo "yes";
    }else{
        echo "no";
    }
    

?>