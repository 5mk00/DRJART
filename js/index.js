// navBar 스크롤 될 때 흰생 배경 넣기
// mainPage > Daily moisture care 부분 스크롤시 이미지 위로 움직임
// mainPage > 마지막 부분 밑줄 스크롤 시 생김

// * accordion 만들기
// 색상, ml 선택 시 이미지, 설명, 버튼 변경
// detailPage Read More 누르면 문장 이어붙이기
// showPW, forgotPW error, submit
//.accComponent active
// toggle on/off
//custormerInquiry inputTab 선택 => 해당되는 inputTabPage 보이기

var reloadTarget = null;

$(document).ready(function(){
    textSlider();
    cartSlider()
    imgSlider();
    itemSlider();
    shopGnb();
    cartPanel();
    accActive();
    panelControl(".shopBtn input[type='button']");
    panelControl(".btnSubmit");
    scrollEffect();
});
function scrollEffect(){
    var effLine = 0;
    var currentPos = 0;
    effLine = $(".scrollTarget").offset().top + 50;
    $(window).scroll(function(){
        currentPos = $(this).scrollTop();
        if(currentPos >= effLine){
            $(".scrollTarget").addClass("active");
        }else{
            $(".scrollTarget").removeClass("active");
        }
    });
}
function panelControl(openBtn){
    var currentPanelName = null;
    $(openBtn).click(function(){
        currentPanelName = "#" + $(this).attr("data-panel");
        $(currentPanelName).addClass("active");
    })
    $(".btnClose").click(function(){
        $(currentPanelName).removeClass("active");
    });
}
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
        // mode: 'vertical',
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
    $("input[data-panel='cartPanel']").click(function(){
        $('#cartPanel').addClass('active');
        reloadTarget.reloadSlider();
    });
    $('.cartClose').click(function(){
        $('#cartPanel').removeClass('active');
    });
}




function accActive(){
    $('.accComponent > li > strong, .accComponent > h3, footer > div:nth-of-type(2) div:nth-of-type(1) nav h3').click(function(){
        $(this).toggleClass('active');
    });
}



// function modalShow(){
//     $('#showPopup').click(function(){
//         $('#modalWrap').addClass('active');
//         $('body').css('overflow','hidden');
//     });
// }




/* 모바일 메뉴 좌우스크롤에서 선택된 메뉴 쪽으로 스크롤 되도록 하기*/ 
// function asideScroll(){
// 	var left = $('div > aside ul li a.active').offset().left - $('div > aside ul li').offset().left;
//     var curLeft = $('div > aside ul').scrollLeft();          
//     $('div > aside ul').scrollLeft(curLeft + left);
// }



/* 모바일 shopping&order에서 구매 기간 조회 펼치기 
+ 버튼 active*/
// function periodSearch(){
//     $('.shippingOrder > div > div > div > div:first-of-type > label').click(function(){
//         $('.shippingOrder > div > div > div > div:first-of-type > *:not(:first-child), .shippingOrder > div > div > div > input').toggleClass('open');
//     });
//     $('.shippingOrder > div > div > div > input').click(function(){
//         $('.shippingOrder > div > div > div > input').removeClass('active');
//         $(this).toggleClass('active');
//     });
// }