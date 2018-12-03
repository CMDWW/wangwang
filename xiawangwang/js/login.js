$(function(){
    $('.gotoreg').click(function(){
        $('.denglu').css('display','none');
        $('.zhuce').css('display','block');
    })
        
     $('.dl').click(function(){
        $('.zhuce').css('display','none');
        $('.denglu').css('display','block');
        $('.zcID').css('value','');
        $('.zcPassword').css('value','');
     })




    //用户名验证
    $('.zcID').keyup(function() {
        var usn = $('.zcID').val();
        $.ajax({
            type: "get",
            url: "../api/yanzheng.php",
            async: true,
            data: {
                
                'username': usn
            },
            success: function(str) {
                console.log(str);
                var data = JSON.parse(str);
                // console.log(data);

                var reg = /^[a-z][\w]{5,19}$/;

                if(!reg.test($('.zcID').val())){
                    $('.zctisi').html("字母开头，长度大于6位，无空格及特殊字符").css('color', 'red');
                    return false;
                }
                if(data!==null) {
                    console.log(data);
                    $('.zctisi').html("这个名称已经被注册了").css('color', 'red');
                } else {
                    $('.zctisi').html("你输入的名称可以注册！").css('color', 'green');
                }
            },
        });
    });


    //注册
    //
    $('.zcBtn').click(function() {
        var usn = $('.zcID').val();
        console.log(usn);
        var psw = $('.zcPassword').val();
        console.log(psw);
        $.ajax({
            type: "post",
            url: "../api/reg.php",
            async: true,
            data: {
                
                'username': usn,
                'password': psw
            },
            success: function(str) {
                console.log(str)
                if(str==="yes") {
                    alert("注册成功");
                    $('.zcID').attr("value","");
                    $('.zcPassword').attr("value","");
                }else if(str==="no") {
                    alert("注册失败");
                }
            },
        });
    });



    //登录
    $('.dlBtn').click(function() {

        var usn = $('.dlID').val();
        var psw = $('.dlPassword').val();
        console.log(usn,psw);
        if(usn==''){
            alert("请您输入账号！");
        }
        $.ajax({
            type: "post",
            url: "../api/login.php",
            async: true,
            data: {
                
                'username': usn,
                'password': psw
            },
            success: function(str) {
                console.log(str);
                var data = JSON.parse(str);
                console.log(data);
                if(data!==null){
                    alert("登录成功！");
                    location.href = "shouye.html";
                }
                else{
                    alert("用户名和密码错误！");
                }
            },
        });
    });
        
})
    




