//navBar
// mainPage > Daily moisture care 부분 스크롤시 이미지 위로 움직임
// mainPage > 마지막 부분 밑줄
// productBottomBar
// * accordion 만들기
// 색상, ml 선택
// showPW, forgotPW error, submit
$(document).ready(function(){
    textSlider();
    imgSlider();
    shopGnb();
});

function textSlider(){
    $(".collectionSlider").bxSlider();
}
function imgSlider(){
    $(".vertitailSlider").bxSlider({
        mode: 'vertical',
        pagerCustom: '.thumbPager'
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


















