/* 
* @Author: Marte
* @Date:   2018-11-23 17:19:47
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-27 21:07:58
*/

    var data=decodeURI(location.search);
            var str=data.slice(1);
            // console.log(str);
             var obj=strToObj(str);
            console.log(obj.id);
        var id=obj.id;
    var num = 1;
    var Pinfo=document.querySelector(".Pinfo");
        let xhr = new XMLHttpRequest(); 
         xhr.open('get','../api/details1.php?id='+obj.id,true);
        xhr.send();
        // xhr.onreadystatechange=function(){
        //     if(xhr.readyState==4&&xhr.status==200){
        //         var data=xhr.responseText;
        //         var shop=JSON.parse(data);
        //     }
        // }
        xhr.onload = function(){
            let shop = JSON.parse(xhr.responseText);
            console.log(shop)
            var dom = document.querySelector('#myimg img');
            dom.src=shop[0].src;

             var magnifierConfig = {
                magnifier : "#magnifier1",//最外层的大容器
                width : 400,//承载容器宽
                height : 400,//承载容器高
                moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
                zoom : 5//缩放比例
            };

            var _magnifier = magnifier(magnifierConfig);



        var res= `<dt class="PTags">
                        <i class="selftag tag">自营</i>
                        <i class="crosstag tag">跨境</i>
                    </dt>
                    <dt class="country">
                        <span>
                            <img src="../images/details_tg.png" alt="" />
                        </span>
                        <span>泰国</span>
                        <span class="split">|</span>
                        <span>RAY</span>
                    </dt>
                    <dt class="product-title"><!-- 商品名称 --></dt>
                    <dt class="subTit">
                        高品质的天然蚕丝面膜俘获一票妹子的心，众多明星为其疯狂打call。天然蚕丝中加入蜗牛原液，补水保湿的同时紧致肌肤，唤醒年轻新“肌”，超薄面膜，轻柔贴合。
                    </dt>
                    <dd class="product-price"><!-- 商品价格 -->
                        <div class="m-price">
                            <span class="m-line-title">售价</span>
                            <div class="price-cnt">
                                <div class="price">${shop[0].price}</div>
                                <span class="baoyou">包邮</span>
                                <div class="offprice"><!-- 原价 --></div>
                            </div>
                        </div>
                    </dd>
                    <dd class="huodong">
                        <div class="m-prt">
                            <span class="m-line-title">活动</span>
                        </div>
                        <div class="hdRight">
                            <span class="xrzx-title">新人专享</span>
                            <span class="xrzx">
                                <span>新人专享</span>
                            </span>
                        </div>
                    </dd>

                    <dd class="shuifei">
                        <span class="m-line-title">税费</span>
                        <div class="descwrap">
                            <div class="taxmsg">
                                预估￥<b class="ygj"></b>，实际税费请以提交订单时为准
                            </div>
                        </div>
                    </dd>
                    
                    <dd class="fuwu">
                        <span class="m-line-title f-fl">服务</span>
                        <span class="send">本商品由 自营保税仓 发货</span>
                        <div class="tomorrowarr">
                            <span class="m-line-title f-fl"></span>
                            <span>24:00前完成支付，预计</span>
                            <span class="f-bold"></span>
                            <span>送达</span>
                        </div>
                    </dd>

                    <div class="shuliang">
                        <span class="m-line-title">数量</span>
                        <em class="buybox" name="js_buyBox">
                            <span class="ctrnum-wrap">
                                <a hidefocus="true" class="ctrnum-minus mp" href="javascript:;">-</a>
                                <input type="text" autocomplete="off" class="ctrnum-qty" name="goods" value="1">
                                <a hidefocus="true" class="ctrnum-plus mp" href="javascript:;">+</a>
                            </span>
                            <span class="domeTips">选择你要的数量</span>
                            <span id="js_dome" class="dome hide"></span>
                        </em>
                    </div>

                    <dd class="shuomin">
                        <div class="smTop">
                            <span class="f-fl m-line-title">说明</span>
                            <ul class="buynowonly">
                                <li class="link f-fl membertip"><i></i>会员96折</li>
                                <li class="f-fl"><i class=""></i>支持7天无忧退货</li>
                                <li class="f-fl"><i class="unsupport"></i>不可使用优惠券</li>
                            </ul>
                        </div>
                    </dd>


                    <dd class="buy">
                        <div class="smBtn">
                            <a class="lijigm">立即购买</a>
                            <a class="jiarugwc">加入购物车</a>

                        </div>
                    </dd>`
                // console.log(Pinfo);
                    Pinfo.innerHTML=res;
                     var ctrnum=document.getElementsByClassName("ctrnum-qty")[0];
                     var minus=document.getElementsByClassName("ctrnum-minus")[0];
                     var plus=document.getElementsByClassName("ctrnum-plus")[0];
                    minus.onclick=function(){
                        num --;
                        ctrnum.value = num
                    }
                    plus.onclick=function(){
                        num++;
                        ctrnum.value = num
                    }
                    var jiarugwc=document.getElementsByClassName("jiarugwc")[0];
                    console.log(jiarugwc);
                    jiarugwc.onclick=function(){
                        // console.log(123);
                         $.ajax({
                                type:"GET",
                                url:"../api/crb.php",
                                async:true,
                                data:{
                                    "id":id,
                                   

                                    
                                },
                                success:function(str){
                                    console.log(str);
                                }
                            })

                        location.href="shopping_car.html"
                    }
}




