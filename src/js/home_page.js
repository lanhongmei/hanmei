$(function(){

    // 头部下滑效果
    $('#head .nav>li').mouseover(function(){
        $(this).find('#nav-show').stop().animate({
            top:68
        },300,'linear')
        $('#head,.head').css({
            backgroundColor:'#fff'
        })
    })
    $('#head .nav>li').mouseleave(function(){
        $(this).find('#nav-show').animate({
            top:-332
        },300,'linear')
        $('#head,.head').css({
            backgroundColor:'#f7f7f7'
        })
    })
    $('#head .sfq').mouseover(function(){
        $(this).children().eq(2).css('width',100).siblings().css({'width':25,'display':'block'})
    })
    $('#head .sfq').mouseleave(function(){
        $(this).children().eq(2).css('width',100).siblings().css({'width':0,'display':'none'})
    })



    // 焦点图轮播
    lunbo();
    function lunbo(){   
        var banner=document.querySelector("#banner");
        var imgs=document.querySelectorAll('#banner>img');
        var lis=document.querySelectorAll('#banner li');
        var count=0;
        clearInterval(timer);
        var timer=setInterval(function(){    
            count++;
            if(count>imgs.length-1){
                count=0;
            }
            for(var i=0;i<imgs.length;i++){
                imgs[i].className="";
                lis[i].className="";
                imgs[count].className="show";
                lis[count].className="show";
            }
        },3000)
        banner.onmouseover=function(){
            clearInterval(timer);
        }
        banner.onmouseleave=function(){
            lunbo();
        }
        for(var j=0;j<lis.length;j++){
            lis[j].onclick=function(){
                clearInterval(timer);
                for(var i=0;i<lis.length;i++){
                    imgs[i].className="";
                    lis[i].className="";
                    if(this==lis[i]){
                        this.className="show";
                        imgs[i].className="show";
                    }
                }
            }
        }
    }



    //三级导航
    $('.po-nav>li').mouseover(function(){
        $(this).find('.box').css('display','block')
        return false;
    })
    $('.po-nav>li').mouseleave(function(){
        $(this).find('.box').css('display','none')
    })



    //抢购区倒计时
    setInterval(function(){
        $sp01=$('.rush>.title p>span').eq(0);
        $sp02=$('.rush>.title p>span').eq(1);
        $sp03=$('.rush>.title p>span').eq(2);
        $d=new Date();
        $hour=23-$d.getHours();
        $minute=59-$d.getMinutes();
        $second=59-$d.getSeconds();
        $sp01.text($hour);
        $sp02.text($minute);
        $sp03.text($second);
    },1000)



    //抢购区切换图片
    $('.a-left').click(function(){
        $('.ul-box>ul').animate({
            left:0
        })
    })
    $('.a-right').click(function(){
        $('.ul-box>ul').animate({
            left:-1200
        })
    })



    //返回顶部功能
    $('.top-go').click(function(){
        $('html').animate({scrollTop:0},1000);
    })



    //跳转到购物车页面
    $('.car-go').click(function(){
        location.href="../pages/car.html";
    })



    //跳转到登录页面 
    $('.login-go').click(function(){
        location.href="../pages/login.html";
    })



    //跳转到注册页面 
    $(".register-go").click(function(){
        location.href="../pages/register.html";
    })

})



