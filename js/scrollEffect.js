$(document).ready(function(){
    scrollEffect();
});

function scrollEffect(){
    var currentPos = 0;
    var target = $(".scrollTarget");
    var currentTarget = null;
    var posData = [];
    var arrCount = 0;
    
    if (window.matchMedia("(min-width: 1280px)").matches) {
        for(var i = 0; i < target.length; i++){
            currentTarget = target.eq(i).offset().top-150;
            posData.push({
                index:(i), topPos: currentTarget
            });
        }
        
        $(window).scroll(function(){
            currentPos = $(this).scrollTop();
            if(currentPos >= posData[arrCount].topPos){
                $(".scrollTarget").eq(arrCount).addClass("active");
                arrCount++;
            }else if(currentPos <= 100){
                $(".scrollTarget").removeClass("active");
                arrCount = 0;
            }
    
            if(arrCount >= posData.length){
                arrCount = posData.length -1;
            }
        });
      }
      else{
        $(".scrollTarget").addClass("active");
      }



    
}