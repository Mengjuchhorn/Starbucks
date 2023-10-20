/* =================================[box-slide-bar]================================ */
$(document).ready(function(){
     $('.btn_bar').click(function(){
          const popup = ' <div class="popup"></div>';
          $('.box-slide-bar').css({'left':'0'});
          $('body').append(popup);
     })
     $('body').on('click','.popup',function(){
          $(this).parents('body').find('.popup').hide();
          $(this).parents('body').find('.box-slide-bar').css({'left':'-400px'})
     })
     let i = true
     $('.drop').click(function(){
          if(i){
               $(this).css({'transform':'rotate(90deg)'});
               i = false
          }else{
               $(this).css({'transform':'rotate(0deg)'});
               i = true
          }
          $(this).parents('li').find('.slide').slideToggle();
     })
})

/* =================================[.box-slide]================================ */
$(document).ready(function(){
     const slide = $('.slide1');
     const numSlide = slide.length;
     console.log(numSlide)
     slide.hide()
     let i = 0;
     slide.eq(i).show();
     setInterval(function(){
          slide.eq(i).hide()
          i++;
          if(i >= numSlide){
               i=0;
          }
          slide.eq(i).show()
     },3000)

     $('.next').click(function(){
          slide.eq(i).hide()
          i++;
          if(i >= numSlide){
               i=0;
          }
          slide.eq(i).show()
     })
     $('.back').click(function(){
          slide.eq(i).hide()
          if(i == 0){
               i = numSlide;
          }
          i--;
          slide.eq(i).show()
     })

})
/* =================================[.sing-in]================================ */
$(document).ready(function(){
     $('.sing-in').click(function(){
          const popup = ' <div class="popup-sing"></div>';
          $('.box-slide-bar-sing').css({'right':'0px'});
          $('body').append(popup);
     })
     $('body').on('click','.popup-sing',function(){
          $(this).parents('body').find('.popup-sing').hide();
          $(this).parents('body').find('.box-slide-bar-sing').css({'right':'-400px'})
     })
     let i = true;
})

/* =================================[.box-slide-bar-contect]================================ */
$('.contact').click(function(){
     const popup = ' <div class="popup-contect"></div>';
     $('.box-slide-bar-contect').css({'left':'0'});
     $('body').append(popup);
})
$('body').on('click','.popup-contect',function(){
     $(this).parents('body').find('.popup-contect').hide();
     $(this).parents('body').find('.box-slide-bar-contect').css({'left':'0'})
})
let i = true;
