<?php
	include 'connect.php';
	$way=isset($_GET['way']) ? $_GET['way'] :'sub';
	$id=isset($_GET['id']) ? $_GET['id'] :'3';
	$sql="SELECT * FROM shopc where id='$id'";//查询当前id的商品
	$res=$conn->query($sql);
	$content=$res->fetch_all(MYSQLI_ASSOC);//当前id的商品的数组结果
	var_dump($content[0]);
	$qty=$content[0]['qty'];//当前id的商品的数量
	var_dump($qty);
	
	if($way=='add'){
		$qty=++$qty;//数量自加1
		$sql2="UPDATE shopc SET qty='$qty' WHERE id='$id'";//更新数据库
		$res2=$conn->query($sql2);//执行语句
		$sql3="SELECT * FROM shopc where id='$id'";//查询当前id的商品更新完的数据
		$res3=$conn->query($sql3);//执行语句
		$data3=$res3->fetch_all(MYSQLI_ASSOC);
		$qty3=$data3[0]['qty'];
		$con=array(
			'content'=>$data3,//查询到的数据
			'number'=>$qty3//加后数量
		);
		echo json_encode($con);
		$res3->close();//关掉结果集
	}else if($way=='sub'){
		if($qty<2){
			echo 'no';
		}else{
			$qty=--$qty;//数量自减1
			$sql2="UPDATE shopc SET qty='$qty' WHERE id='$id'";//更新数据库
			$res2=$conn->query($sql2);//执行语句
			$sql3="SELECT * FROM shopc where id='$id'";//查询当前id的商品更新完的数据
			$res3=$conn->query($sql3);//执行语句
			$data3=$res3->fetch_all(MYSQLI_ASSOC);
			$qty3=$data3[0]['qty'];
			$con=array(
				'content'=>$data3,//查询到的数据
				'number'=>$qty3//减后数量
			);
			echo json_encode($con);
			$res3->close();//关掉结果集
		}
	}
	
	$res->close();//关掉结果集
	$conn->close();//断开连接
?>