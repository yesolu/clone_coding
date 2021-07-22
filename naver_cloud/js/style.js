$(document).ready(function(){
    $('.gnb_link').on('click',function(){
      $('.gnb_link').removeClass('on')
      $(this).addClass('on')

      var i = $(this).index()
      
  
    })
  
  });

  $(document).ready(function(){
    $('.lnb_link a').on('click',function(){
      $('.lnb_link a').removeClass('on')
      $(this).addClass('on')

      var i = $(this).index()
      
  
    })
  
  });

  $(document).ready(function(){
    $('.lang').on('click',function(){
      $('.lnb').toggleClass('on')
      $('.lnb').slideToggle('slow')

})


  
  });

  $(window).scroll(function(){
    //스크롤이 될때마다 위치를 담아라
    var scrollTopPus = $(window).scrollTop();
    if(scrollTopPus > 0){//스크롤을 아래로 내리는 순간 처리
        $("body").addClass('scroll');
    }
    else{//스크롤이 완전 위에 닿았을때 처리
        $('body').removeClass('scroll');
    }


});
  
