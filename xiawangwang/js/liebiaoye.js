/* 
* @Author: Marte
* @Date:   2018-11-26 17:41:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-26 20:07:33
*/
var sys=document.querySelector("#sys");
var url="../goodslist.php";
ajax("GET",url,'',function(str){
        // console.log(str);
        arr=JSON.parse(str);
        // console.log(arr);
        create(arr);
})
function create(arr){
    console.log(123);
   var res=arr.map(function(item){
         return ` <li data-id="${item.id}">
                    <div class="sysbox">
                     <img src="${item.images}" alt="" />
                    <h3>${item.title}</h3>
                    <h4>${item.desc}</h4>
                    <span class="span1">￥</span>
                    <span class="span2">${item.nprice}</span>
                    <span class="span3"><del>￥${item.oprice}</del></span>
                    <span class="span4">立即购买</span>    
                    </div>
                </li>`;
            }).join('');
     // console.log(res);

        sys.innerHTML=res;
   
}
var span1=document.getElementById("span1");
span1.onclick=function(){
    url="../api/px.php";
ajax("GET",url,'a=1',function(str){
    console.log(str);
    var arr=JSON.parse(str);
    create(arr);
    })
}
span2.onclick=function(){
    url="../api/px.php";
    ajax("GET",url,'a=6',function(str){
        console.log(str);
        var arr=JSON.parse(str);
        create(arr);
    })
}
$(sys).on("click","li",function(){
        // alert("成功");
        var id=$(this).attr("data-id")
        location.href="details.html?id="+id;
    })