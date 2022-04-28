$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
  });
// search btn
$(function(){
    const search = $('.search-btn');
    const search_container = $('.search-container');
   
    search.click(function(){
       
        search_container.toggleClass('active');
        $(this).toggleClass('active');
    })
  
})
//header scroll
$(window).scroll(function(){
    if( $(window).scrollTop()>80){
        $('header').addClass('active');
    }
    else{
        $('header').removeClass('active');
    }
})