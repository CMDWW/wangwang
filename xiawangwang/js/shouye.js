/* 
* @Author: Marte
* @Date:   2018-11-22 11:59:56
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-26 20:02:30
*/
var banner=document.querySelector("#banner");
var  lis=document.querySelectorAll("#banner>ul >li");
var btns=document.querySelectorAll("#banner ol span");
var prev=document.querySelector("#prev");
var wnext=document.querySelector("#next");
var len=btns.length;
var now=0;
tab();
for(let i=0;i<len;i++){
    btns[i].onclick=function(){
        now=i;
        tab();
    }
}
function tab(){
    for(let j=0;j<len;j++){
        btns[j].className="";
        lis[j].style.display="block";
        startMove(lis[j],{"opacity":0},function(){
            lis[j].style.display="none";
        });
    }
    btns[now].className="selected";
    startMove(lis[now],{"opacity":100});
}
function next(){
    now++;
    if(now==len){
        now=0;
    }
    tab()
}
var timer=setInterval(next,2000);
banner.onmouseover=function(){
    clearInterval(timer);
}
banner.onmouseout=function(){
    timer=setInterval(next,2000);
}
prev.onclick=function(){
    now--;
    if(now<0){
        now=len-1;
    }
    tab()
}
wnext.onclick=function(){
    next()
}
//数据渲染
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
// $('#sys').on('mouseover','li',function(){
//     console.log(123);
//     console.log($(this));
//      $(this).find('.sysbox').css('width','194px');
//     $(this).find('.sysbox').css('height','316px');
//     $(this).find('.sysbox').css('backgroundColor','white');
//     $(this).find('.sysbox').css('borderWidth','1px');
//     $(this).find('.sysbox').css('borderStyle','solid');
//      $(this).find('.sysbox').css('borderColor','red');
//      $(this).find('.sysbox').css('zIndex',3);
// })
// var aLis=sys.getElementsByTagName("li");
    // aLis[i].onclick=function(){
    // }
    $(sys).on("click","li",function(){
        // alert("成功");
        var id=$(this).attr("data-id")
        location.href="liebiaoye.html?id="+id;
    })