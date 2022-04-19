// Heder scroll
$(window).scroll(function(){
    if($(window).scrollTop()>50){
        $('header').addClass('active')
    }
    else($('header').removeClass('active')
    )
})


//accordion
$(function(){
    $('.desc').eq(0).show()
    $('.title').eq(0).addClass('active')
    $('.title').click(function(){
       $(this).addClass('active')
       $(this).siblings('.title').removeClass('active')
       $(this).siblings('.desc').stop().slideUp(300)
       $(this).next('.desc').stop().slideDown(300)
    })
})

//goto top btn : 제자리에서 fadeIn, fadeOut(opacity, transition합친효과)
$(window).scroll(function(){
    if($(window).scrollTop()>50){
        $('.go_btn').addClass('active')
    }
    else(
        $('.go_btn').removeClass('active')
        )
    })   
    
//slick slider custom btn 
$(function(){
    $('.review-slider,.mockup-slider').slick({
        infinite: false, // 무한반복
        dots: true, // 동그라미 네비게이션 사용안함
        autoplay: false, // 자동 재생
        autoplaySpeed: 2000, // 자동 재생 시 머무는 시간
      });
    })






