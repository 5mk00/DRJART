$(document).ready(function(){
    asideScroll('div > aside ul');
});



// 좌우스크롤에서 선택된 메뉴 쪽으로 스크롤 되도록 하기
// function asideScroll(menuSelect){
// 	var left = $(menuSelect).find(".active").offset().left - $(menuSelect).children().offset().left;
//     var curLeft = $(menuSelect).scrollLeft();          
//     $(menuSelect).scrollLeft(curLeft + left);
// }




function asideScroll(menuSelect){
    var box = $(menuSelect).parent("aside");
    var boxItem = box.find("li");
    var boxHarf = box.width()/2;
    var pos;
    var listWidth=0;
    var targetLeft = 0;

    boxItem.each(function(){listWidth += $(this).outerWidth(true);});    
    
    targetLeft = $(menuSelect).find(".active").offset().left;
    
    var selectTargetPos = (targetLeft + $(menuSelect).find(".active").outerWidth()/2);
    
    if (selectTargetPos <= boxHarf) { // left
        pos = 0;
    }else if (listWidth - selectTargetPos <= boxHarf) { //right : target 절반 이후 영역이 boxHarf 보다 작을경우 right 정렬
        // pos = listWidth-box.width();
        pos = targetLeft;
    }else {
        pos = selectTargetPos - boxHarf; // 중앙정렬
    }
    

    $(menuSelect).scrollLeft(pos);
}