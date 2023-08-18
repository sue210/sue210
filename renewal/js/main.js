// slide menu
$('.gnb li').hover(function(){
    $(this).children('.submenu').stop().slideDown();
  }, function(){
    $(this).children('.submenu').stop().slideUp();
  });
  
  // image slide
  // slide menu
  $('.gnb li').hover(function(){
    $(this).children('ul').stop().slideDown();
  }, function(){
    $(this).children('ul').stop().slideUp();
  });
  
  // image slide
  setInterval(function(){
  
    let nowImg = $('figure ul li').eq(0);
    let nextImg = $('figure ul li').eq(1);
  
    nextImg.addClass('active')
    .css({ opacity : 0 })
    .animate({ opacity : 1 }, 1000, function(){
      $('figure ul').append($(nowImg));
      nowImg.removeClass('active');
    })
  
  }, 3000);
  
  // tab menu
  $('.bbs dl dt').click(function(){
  
    $('.bbs dl dt').removeClass('on');
    $(this).addClass('on');
    $('.bbs dl dd').addClass('hidden');
    $(this).next().removeClass('hidden');
  
  });
  
  // popup
  $('dl dd .notice li.pop').click(function(){
    $('#popup').fadeIn();
  });
  $('#popup a').click(function(){
    $('#popup').fadeOut();
  });