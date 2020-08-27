$(function(){

    // 跳转购物车
    $('.car-go').click(function(){
        location.href="../pages/car.html";
    })



    // 滑动滚动条到指定高度给图片定位
    $(window).scroll(function(){
        if($(window).scrollTop()>=68&&$(window).scrollTop()<=1150){
            $('.main-left').css({
                position:'fixed',
                left:123,
                top:68
            })
        }
        else if($(window).scrollTop()>1150){
            $('.main-left').css({
                position:"absolute",
                left:0,
                top:"",
                bottom:35
            })
        }else{
            $('.main-left').css({
                position:"",
            })
        }
    })    



    // 获取首页数据渲染到详情页
    function ajaxNum(){
        //（1）获取地址栏的id
        var url=location.href;
        url = url.split('?')[1];
        var id=url.split('=')[1];
        //（2）根据id发生ajax请求
        $.ajax({
            type:'get',
            url:"../../server/details.php",
            data:{
                'pro_id':id
            },
            dataType:'json',
            success:function(res){
                //（3）将得到的结果渲染到详情页
                // product_id: "1"
                // product_img: "../images/rush01.jpg"
                // product_name: "vivo X30Pro 5G版8GB+128GB"
                // product_num: "0"
                // product_price: "3698"
                $('#name').html(res.product_name)
                $('.money').html(res.product_price)
                $('#img').attr('src',res.product_img)
            }
        })
    }
    ajaxNum();

})











