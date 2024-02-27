$(document).ready(function () {
    $("#fullPage").fullpage({
        // autoScrolling: true,
        scrollHorizontally: true,
        responsiveWidth: 1024,
        navigation: true,
        showActiveTooltip: true,
        scrollOverflow: false,
        anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage", "sixthPage"],
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $(".home-wrap").css({
                    width: "450px",
                    height: "450px",
                });
                $(".home-wrap").animate(
                    {
                        opacity: 1,
                    },
                    100
                );
                $(".arrow").css({
                    opacity: 1,
                });
            }
        },
        
        onLeave: function (index, nextIndex, direction) {
            if (index == 1 && direction == "down") {
                $(".home-wrap").css({
                    width: "4000px",
                    height: "2000px",
                });
                $(".arrow").css({
                    opacity: 0,
                });
            }
        },
    });

    // 마우스커서
    var $mousePointer = $("#mouse-pointer"),
        $clickElements = $("a, label");

    function moverCursor(e) {
        $mousePointer.css({
            left: e.pageX,
            top: e.pageY,
        });
    }
    $clickElements.mouseenter(function () {
        $mousePointer.addClass("hover");
    });
    $clickElements.mouseleave(function () {
        $mousePointer.removeClass("hover");
    });

    $(window).on("mousemove", moverCursor);

    $(".app-form-button").on("click", function () {
        swal({
            title: "이메일 전송완료!🤗",
            icon: "success",
        });
    });

    const menu = document.querySelector('.headerview-menu');
    const menuList = document.querySelector('.headerview-list');

    menu.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.toggle('add');
        menuList.classList.toggle('show');
    });
    
//     $(window).scroll(function(){
//         if($('body').hasClass('fp-viewing-sevenPage')){
//             $('#fp-nav').css('display','none')
//         } else {
//             $('#fp-nav').css('display','inline-block')
//         }
//     });
});