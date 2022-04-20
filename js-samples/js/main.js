


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

//tab1 : tab a에 data-alt, list에 id 네임 일치해서 불러오는법
/*
$(function(){
    $('.tab_btn').click(function(){
       
      $(this).addClass('active');
      $(this).siblings().removeClass('active');

       $('.list').removeClass('active');
      $('#' + $(this).attr('data-alt')).addClass('active');
    })
  
  })
*/

//tab2 : eq(idx), idx=$(this).index() 로 불러오는법
/*
$(function(){
    var tab_btn =$('.tab_btn')
    var list =$('.list')
   
    tab_btn.eq(0).addClass('active')//처음 tab에 active
    list.eq(0).addClass('active')//처음 list에 active

    tab_btn.click(function(){
        var idx =$(this).index()//tab의 갯수 변수화

        $(this).siblings().removeClass('active')//tab siblings에 디자인 active뺴기
        $(this).addClass('active')//tab this에  active 넣기

        list.removeClass('active')//list에 active 빼기
        list.eq(idx).addClass('active')//list에 tab의 갯수만큼의 변수idx 만큼 active
    })

})
*/
//tab3 : 함수로 불러오기 tab.click(함수) , function 함수(){}
$(function(){
    const tab_btn =$('.tab_btn')
    const list =$('.list')
    tab_btn.click(tab)
    
    tab_btn.eq(0).addClass('active')//처음 tab에 active
    list.eq(0).addClass('active')//처음 list에 active
    
    function tab(){
        const idx = $(this).index()//tab의 갯수 변수화 (함수내에 작성)


        $(this).siblings().removeClass('active')//tab siblings에 디자인 active뺴기
        $(this).addClass('active')//tab this에  active 넣기

        list.removeClass('active')//list에 active 빼기
        list.eq(idx).addClass('active')//list에 tab의 갯수만큼의 변수idx 만큼 active
    }
        
   

})

