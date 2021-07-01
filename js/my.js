/* scroll header sticky */
window.addEventListener('scroll', function(){
    var header =document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY> 0);
  });


  function toggleMenu(){
    var menuToggle=document.querySelector('.toggle');
    var menu=document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
  }

/* swiper-slider */
  new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 1,
    noSwiping: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});