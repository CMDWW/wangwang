/* 
* @Author: Marte
* @Date:   2018-11-23 22:06:56
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-01 22:59:38
*/


$(function () {

    //生成数据
     $.ajax({
        type: "get",
        url: "../api/shopping_car.php",
        async: true,
        success: function(str) {
            // console.log(str,17)
        
            var data = JSON.parse(str);
            // console.log(data);
            if(data==''){
                console.log(data);
                $('.spq').css('display','none');
                $wsp = $('<div></div>');
                $wsp.html('暂无商品加入购物车！');
                $wsp.css('height','300px');
                $wsp.css('lineHeight','300px');
                $wsp.css('textAlign','center');
                $('.cartMain').append($wsp);
            }

            else if(!data==''){
                // console.log(data);
                $('.spq').css('display','block');
                $mysp = '';
                for(var i=0;i<data.length;i++){
                    // console.log(data[1].images);
                    $mysp += `
                        <ul class="order_lists" index="${data[i].id}">
                        <li class="list_chk">
                            <input type="checkbox" id="checbox_2" class="son_check">
                            
                        </li>
                        <li class="list_con">
                            <div class="list_img"><a href="javascript:;"><img src="${data[i].images}" style="width:80px;height:80px;"></a></div>

                            <div class="list_text">${data[i].title}</div>
                        </li>
                        <li class="list_info">
                            <p>${data[i].explain}</p>
                        </li>
                        <li class="list_price">
                            <p class="price">￥${data[i].price}</p>
                        </li>
                        <li class="list_amount">
                            <div class="amount_box">
                                <a href="javascript:;" class="reduce reSty">-</a>
                                <input type="text" value="${data[i].qty}" class="sum">
                                <a href="javascript:;" class="plus">+</a>
                            </div>
                        </li>
                        <li class="list_sum">
                            <p class="sum_price">￥${(data[i].price)*(data[i].qty)}</p>
                        </li>
                        <li class="list_op">
                            <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
                        </li>
                        </ul>`
                }
                $('.order_content').append($mysp);
            }
        }
    });
 //点击添加数量

   $('body').on('click','.plus',function(){

        var val = $(this).prev().val();//获取input值
        val++;
        if(val>999){
            val = 999;
        }
        $(this).prev().val(val);
        // console.log($(this).parent().parent().parent().attr('index'))
        var id =$(this).parent().parent().parent().attr('index');
             console.log(id);
    $.ajax({
        type:"GET",
        url:"../api/number.php",
        async:true,
        data:{
            "id":id,
            "way":"add"

            
        },
        success:function(str){
            console.log(str);
        }
    })





        //小计
        price($(this));
        var arr = checknum();
        allnum(arr);
        allprice(arr);
   });


   //点击减少数量
   
   $('body').on('click','.reSty',function(){

    var val = $(this).next().val();//获取input值
    val--;
    if(val<1){
        val = 1;
    }
    $(this).next().val(val);
        var id =$(this).parent().parent().parent().attr('index');
             console.log(id);
    $.ajax({
        type:"GET",
        url:"../api/number.php",
        async:true,
        data:{
            "id":id,
            "way":"sub"

            
        },
        success:function(str){
            console.log(str);
        }
    })




    //小计
    price($(this));
    var arr = checknum();
        allnum(arr);
        allprice(arr);

});

    //单一产品价格小计(函数封装)
    function price(item){
         var num = item.parent().find('input').val();
         console.log(item)
         var itemprices = item.parent().parent().prev().find('p').text();
         // itemprices = itemprices.trim();
         console.log(itemprices)
         itemprices = itemprices.substring(1);
         var all = num*itemprices;
         console.log(all)
    item.parents('.list_amount').next().find('p').html('￥&nbsp;' + all.toFixed(2));

    };
   
  
    $('body').on('click','.delBtn',function(){
        var res=confirm('你确定要删除该商品吗？');
        if(res){
            $(this).parent().parent().parent().remove();
        }
            var id=$(this).parent().parent().parent().attr("index");
$.ajax({
    type:"GET",
    url:"../api/goodsdelete.php",
    data:{
        "id":id,
    },
    success:function(str){
        console.log(str);
    }
})

updata();




    });
    
    //全删

   $('.barshoping').click(function(){
        $('.cartMain ').hide();
       $('my_model').show();
   });



function updata(){
    if($('.plus').size()==0){
        $('.bar-wrapper').remove();
    }
}


 
   
        //全选
        //
    var ischecked = true;
     // console.log( $('.whole_check'))

    $('.whole_check').on('click', function() {
        //prop() 添加属性(行为的)  attr（）添加属性 
        // console.log(ischecked)
        if(ischecked) {
            $(this).prop('checked', 'checked');
            $('.son_check').prop('checked', 'checked');
            
            var arr = checknum();
                //总数量
            allnum(arr);
            //总价格
            allprice(arr);
            
        } else {
            
            $(this).removeAttr('checked');
            $('.son_check').removeAttr('checked');
            var arr = checknum();
                //总数量
            allnum(arr);
            //总价格
            allprice(arr);
        }
        ischecked = !ischecked; 
        
    });

//勾选的数量
    function checknum(){
        var arr = [];
        var le = $('.son_check').size();
        for(var i = 0; i < le; i++) {
            if($('.son_check').eq(i).prop('checked')) {
                arr.push(i);
            }
        }
        return arr;
        console.log(arr)
       
    }
    


//全选补充，未选满，失去全选

$('.order_content').on('click','.son_check',function(){

     var arr=checknum();//被勾选的
    if(arr.length==$('.son_check').size()){
        $('.whole_check').prop('checked', 'checked');   
    }
    else{  
        $('.whole_check').removeAttr('checked');
    }
   //总数量
        allnum(arr);
        //总价格
        allprice(arr);

    })

  

    //商品数量
//数量
function allnum(arr) {
    var num = 0;
    for(var i = 0; i < arr.length; i++) {
        num += parseInt($('.sum').eq(arr[i]).val());
    }
    $('.piece_num').html(num);
    //      console.log(123);
}

    
    
   // 商品总价
    function allprice(arr) {
        var price = 0;
        for(var i = 0; i < arr.length; i++) {
            var nowpri = $('.sum_price').eq(arr[i]).text();
            nowpri = $.trim(nowpri);
            nowpri = nowpri.substring(1);
            price += parseInt(nowpri);
        }
        $('.total_text').html( price.toFixed(2));
        
        //添加结算样式
            if(price!=0){
                if(!$('.calBtn a').hasClass('btyshy')){
                    $('.calBtn a').addClass('btyshy');
                    $('.calBtn a').css('background','#ff2337');
                    $('.calBtn a').css('cursor','pointer');
                }
            }else{
                if($('.calBtn a').hasClass('btyshy')){
                    $('.calBtn a').removeClass('btyshy');
                    $('.calBtn a').css('background','#B0B0B0');
                    $('.calBtn a').css('cursor','not-allowed');
                }
            }
        
    }
})
