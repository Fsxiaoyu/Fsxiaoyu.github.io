//滑屏动画
$(".page_1").swipe({
    swipe:function(event, direction, distance, duration, fingerCount) {
        if(direction=='right'){
            $(this).fadeOut().next().fadeIn(500);
        }
       
    }
});


$(".page_2").swipe({
    swipe:function(event, direction, distance, duration, fingerCount) {
        if(direction=='up'){
            $(this).fadeOut().next().fadeIn(500);
        }

         else if(direction == "down")//当向下滑动手指时令当前页面记数器减1
            {                
            $(this).fadeOut().prev().fadeIn(500);
        }
    }
});



$(".page_3").swipe({
    swipe:function(event, direction, distance, duration, fingerCount) {
        if(direction=='up'){
            $(this).fadeOut().next().fadeIn(500);
        }
          else if(direction == "down")//当向下滑动手指时令当前页面记数器减1
            {                
            $(this).fadeOut().prev().fadeIn(500);
        }
    }
});



//滑屏动画
$(".page_4").swipe({
    swipe:function(event, direction, distance, duration, fingerCount) {
        if(direction=='up'){
            $(this).fadeOut().next().fadeIn(500);
        }
          else if(direction == "down")//当向下滑动手指时令当前页面记数器减1
            {                
            $(this).fadeOut().prev().fadeIn(500);
        }
    }
});


//滑屏动画
$(".page_5").swipe({
    swipe:function(event, direction, distance, duration, fingerCount) {
        if(direction == "down")//当向下滑动手指时令当前页面记数器减1
            {                
            $(this).fadeOut().prev().fadeIn(500);
        }
    }
});