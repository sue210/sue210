const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: .5,  // 50%가 viewport에 들어와 있어야 callback 실행
  }
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log(entry.isIntersecting);
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, options);
  
  const titleList = document.querySelectorAll('h2');
  
// 반복문을 돌려 모든 DOM에 적용
titleList.forEach(el => observer.observe(el));


// slide menu
$('.gnb li').hover(function(){
  $(this).children('.submenu').stop().slideDown();
}, function(){
  $(this).children('.submenu').stop().slideUp();
});



setInterval(function(){

  $('.image1 ul').animate({
    left : '-1200px'
  }, 600, function(){
    $('.image1 ul').append($('.image1 ul li').eq(0));
    $('.image1 ul').css({ left : 0 });
  });

}, 1000);