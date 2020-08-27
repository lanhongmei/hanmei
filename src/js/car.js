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



    // 返回顶部
    $('.top-go').click(function(){
        $('html').animate({scrollTop:0},1000);
    })



    // 切换到首页
    $('.homepage-go').click(function(){
        location.href="../pages/home_page.html";
    })



    //跳转到登录页面 
    $('.login-go').click(function(){
        location.href="../pages/login.html";
    })



    //跳转到注册页面 
    $(".register-go").click(function(){
        location.href="../pages/register.html";
    })



     // 点击增加商品
     $('.add-car').click(function(){
        var url=location.href;
        url = url.split('?')[1];
        var id=url.split('=')[1];
        $.ajax({
            url:"../../interface/addwq.php",
            dataType:'json',
            data:{
                id:id,
                name:$('#name').html(),
                img:$('#img').attr('src'),
                price:$('.money').html(),
                num:1
            },
            success:function(res){
                if(res.code){
                    location.href='../pages/car.html'
                }else{
                    alert('加入商品失败')
                }
            }
        })
    })



    // 查询并显示购物车
    function showCart(){
        $.ajax({
            url:"../../interface/showlist.php",
            dataType:'json',
            success:function(res){
                $('.car').html("");
                $.each(res.data,function(index,item){
                    $('.car').append(`
                        <div class="car-box">
                            <img id="car-img" src="${item.product_img}" />
                            <div class="xinxi">
                                <p id="car-name">${item.product_name}</p>
                                <p id="price">${item.product_price}</p>
                            </div>
                            <div class="add_del" i-index="${item.product_id}">
                                <button id="del">删除物品</button>
                                <button id="reduce">-</button>
                                <span id="num">${item.product_num}</span>
                                <button id="add">+</button>
                            </div>
                        </div>
                    `)
                })
            }
        })
    }
    showCart();


    //购物车页面的增加商品数量按钮:改 
    $('.car').on('click','#add',function(){
        var id=$(this).parent().attr('i-index');
        $.ajax({
            url:"../../interface/updatewq.php",
            dataType:'json',
            data:{
                type:'add',
                id:id
            },
            success:function(res){
                if(res.code){
                    showCart();
                }
            }
        })
    })



    // 购物车页面的减少商品数量按钮:改
    $('.car').on('click','#reduce',function(){
        var id=$(this).parent().attr('i-index');
        $.ajax({
            url:"../../interface/updatewq.php",
            dataType:'json',
            data:{
                type:'reduce',
                id:id
            },
            success:function(res){
                if(res.code){
                    showCart();
                }
            }
        })
    })



    // 删除商品按钮:删
    $('.car').on('click','#del',function(){
        var id=$(this).parent().attr('i-index');
        $.ajax({
            url:"../../interface/delwq.php",
            data:{
                id:id
            },
            dataType:'json',
            success:function(res){
                if(res.code){
                    showCart();
                }
            }
        })
    })



















})