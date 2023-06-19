//navBar
// mainPage > Daily moisture care 부분 스크롤시 이미지 위로 움직임
// mainPage > 마지막 부분 밑줄
// productBottomBar
// * accordion 만들기
// 색상, ml 선택
// showPW, forgotPW error, submit
//.accComponent
// toggle on/off
//inputTabPage
var reloadTarget = null;

$(document).ready(function(){
    textSlider();
    cartSlider()
    imgSlider();
    itemSlider();
    shopGnb();
    cartPanel();
    accActive();
    modalShow();
});

function textSlider(){
    $(".collectionSlider").bxSlider();
}
function cartSlider(){
    reloadTarget = $(".recSlider").bxSlider({
        pager: false,
        wrapperClass: 'rec-wrapper'
    });
}
function imgSlider(){
    $(".vertitailSlider").bxSlider({
        mode: 'vertical',
        pagerCustom: '.thumbPager'
    });
}
function itemSlider(){
    $(".verticalSlider").bxSlider({
        mode: 'vertical',
        auto: true,
		speed: 500,
		pause: 4000,
        pager: false,
        // autoHover: true,
        controls: false,
        touchEnabled : false,
        startSlide: 0
    });
}
function shopGnb(){
    $('.shopBtn').click(function(){
        $('#gnbPanel').addClass('active');
    });
    $('.btnClose').click(function(){
        $('#gnbPanel').removeClass('active');
    });
}
function cartPanel(){
    $('#home > div > ul:last-of-type li input').click(function(){
        $('#cartPanel').addClass('active');
        reloadTarget.reloadSlider();
    });
    $('.cartClose').click(function(){
        $('#cartPanel').removeClass('active');
    });
}




function accActive(){
    $('.accComponent > li > strong, .accComponent > h3').click(function(){
        $(this).toggleClass('active');
    });
}



function modalShow(){
    $('#showModal').click(function(){
        $('#modalWrap').addClass('active');
        $('body').css('overflow','hidden');
    });
}










