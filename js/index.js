var reloadTarget = null;

$(document).ready(function(){
    navBar();
    itemQuant();

    customSlider(".collectionSlider",'horizontal',null,false,true,true,true,0,'bx-wrapper');
    customSlider(".recSlider",'horizontal',null,false,false,true,true,0,'rec-wrapper');
    customSlider(".vertitailSlider",'horizontal','.thumbPager',false,true,false,true,0,'bx-wrapper');
    customSlider(".verticalSlider",'vertical',null,true,false,false,false,0,'bx-wrapper');

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
        if($(window).scrollTop() == 0){
            $("header").removeClass("active");
        } else{
            $("header").addClass("active");
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



function customSlider(slideName,slideMode,slidePagerCustom,slideAuto,slidePager,slideControls,slideTouchEnabled,slideStartSlide,slideWrapperClass){
    if(slideName==".recSlider"){
        reloadTarget = $(slideName).bxSlider({
            pager: slidePager,
            wrapperClass: slideWrapperClass
        });
    }else{
        $(slideName).bxSlider({
            mode: slideMode,
            pagerCustom: slidePagerCustom,
            auto: slideAuto,
            pager: slidePager,
            controls: slideControls,
            touchEnabled : slideTouchEnabled,
            startSlide: slideStartSlide,
            wrapperClass: slideWrapperClass
        });
    }
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

