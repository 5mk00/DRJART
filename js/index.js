// navBar 스크롤 될 때 흰생 배경 넣기
// mainPage > Daily moisture care 부분 스크롤시 이미지 위로 움직임
// mainPage > 마지막 부분 밑줄 스크롤 시 생김

// * accordion 만들기

// 색상, ml 선택 시 이미지, 설명, 버튼 변경
// showPW, submit

// detailPage Read More 누르면 문장 이어붙이기
//장바구니 수량 +-
//.accComponent active
// toggle on/off
//custormerInquiry inputTab 선택 => 해당되는 inputTabPage 보이기



var reloadTarget = null;

$(document).ready(function(){
    navBar();
    itemQuant();
    textSlider();
    cartSlider()
    imgSlider();
    itemSlider();
    shopGnb();
    cartPanel();
    accActive();
    panelControl(".shopBtn input[type='button']");
    panelControl(".btnSubmit");
    accActive(".accComponent > li > strong");
    accActive(".accComponent > h3");
    accActive("footer > div:nth-of-type(2) div:nth-of-type(1) nav h3");
    accActive(".customerInquiry > div > div > div:first-of-type > div > div > div:nth-of-type(2) span");
    descriptionControl("#morePanel > input");
    inquiryTab();
    itemColorSize(".barrier input");
    itemColorSize(".reju input");
    itemColorSize(".mlChoose > input");
    showPW();
    periodSearch('.shippingOrder > div > div > div > div:first-of-type > label');
});


function navBar(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $("header").height()){
            $("header").css({
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 4px -4px black"
            });
        }
        else{
            $("header").css({
                backgroundColor: "transparent",
                boxShadow: "none"
            });
        }
    });
}

function itemQuant(){
    $(".minusBtn").click(function(){        
        var count = $(this).parent(".quantComponent").find("input[type='text']").val();
        var num = Number(count);
        
        num--;
        if(num<=0){num=1;}
        $(this).parent(".quantComponent").find("input[type='text']").val(num);
    });

    $(".plusBtn").click(function(){
        var count = $(this).parent(".quantComponent").find("input[type='text']").val();
        var num = Number(count);

        num++;
        if(num>=30){num=30;}
        $(this).parent(".quantComponent").find("input[type='text']").val(num);
    });
}

function panelControl(openBtn){
    var currentPanelName = null;
    $(openBtn).click(function(){
        currentPanelName = "#" + $(this).attr("data-panel");
        $(currentPanelName).addClass("active");
    });
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








function accActive(accOpen){
    $(accOpen).click(function(){
        $(this).toggleClass('active');
    });
}







function descriptionControl(btn){
    var previewText = $(btn).parents().children().first().text();

    var textBox = previewText;

    $(btn).click(function(){
        if($(this).attr("value")=="Read More"){
            textBox += $(this).parents().find("#lessPanel").text();
            $(btn).parents().children().first().text(textBox);
            $(this).val('Read Less');
        }
        else{
            textBox = previewText;
            $(btn).parents().children().first().text(textBox);
            $(this).val('Read More');
        }
    });

}

// 0. 기존문장을 저장할 a변수.
// 1. 기존문장 -> b 변수에 저장해
// 2. b변수를 불러와 변경문장을 + 해주기.
// 3. 그 문장을 b변수에 재 저장.
// 4. b변수를부르면 최종 변경된 문장.



function inquiryTab(){
    $(".inputTab > input").click(function(){
        $(".inputTab > input").removeClass('active');
        $(".inputTabPage > li").removeClass('active');
        $(this).addClass('active');
        $(".inputTabPage > li").eq($(this).index()).addClass('active');
    });
}




function showPW(){
    var $toggleTarget = $(".PW_wrap > input[type='button']");
    var toggleStatus = false;
    var $pwInput = $("#userPW");
    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $(this).addClass("active");
            $pwInput.attr("type","text");
        }else{
            $(this).removeClass("active");
            $pwInput.attr("type","password");
        }
    });
}






function periodSearch(searchOpen){
    $(searchOpen).click(function(){
        $(searchOpen).siblings().toggleClass('open');
        $(searchOpen).parents().siblings("input").toggleClass('open');
    });
    $(searchOpen).parents().siblings("input").click(function(){
        $(this).siblings("input").removeClass('active');
        $(this).toggleClass('active');
    });
}


function itemColorSize(item){

    var sizePrice = null;
    var selectImg = null;
    // var sizeID = null;

    // var getSrc = null;
    // var getSrcSplit = null;
    // var imgSrc = null;
    // $(this).parents("li").find("img").css("display","none");
    // $(item).click(function(){
    //     $(this).siblings().removeClass('active');
    //     $(this).addClass('active');
    //     sizePrice = $(this).attr("data-price");
    //     selectImg = ".size_" + $(this).attr("value");
    //     $(this).parents("li").find(".priceValue").text(sizePrice);
    //     $(this).parents("li").find("img").removeClass("active");
    //     $(this).parents("li").find(selectImg).addClass("active");

    // });

    $(item).click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        sizePrice = $(this).attr("data-price");
        selectImg = ".choose_" + $(this).attr("value");
        $(this).parents("li").find(".priceValue").text(sizePrice);
        $(this).parents("li").find("div.active").removeClass("active");
        $(this).parents("li").find(selectImg).addClass("active");

    });

}

