// Heder scroll
$(window).scroll(function(){
    if($(window).scrollTop()>50){
        $('header').addClass('active')
    }
    else($('header').removeClass('active')
    )
})

//accordion
$('.title').click(function(){
    $(this).addClass('active')
    $(this).siblings('.title').removeClass('active')
    $(this).siblings('.desc').slideUp()
    $(this).next().slideDown()
})