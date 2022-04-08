$(document).ready(function(){
    new Swiper('.swiper-container', {
        slidesPerView: '4', //한번에 보여줄 요소 갯수 지정. auto 로 설정해도 됨.
        spaceBetween: 0, //슬라이드간 padding 값 30px 씩 떨어뜨려줌
        loop: true, //loop 를 true 로 할경우 무한반복 슬라이드 
        autoplay: {
          delay: 4000, //2초에 한번씩 자동으로 슬라이드
        },
        breakpoints: { 
            768: { slidesPerView: 1, spaceBetween: 0 },// 화면의 넓이가 768px 이상일 때
        }
      });


    });
    
    new Swiper('.swiper-container', {
      pagination : { // 페이징 설정
        el : '.swiper-pagination',
        clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
      },
      navigation : { // 네비게이션 설정
        nextEl : '.swiper-button-next', // 다음 버튼 클래스명
        prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
      },
    });