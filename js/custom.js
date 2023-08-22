$(function () {

    const txt = document.querySelectorAll('.text p');

    txt.forEach(it => {
        it.innerHTML = it.innerText.split('').map(
            (char, i) =>
                `<span style="transform:rotate(${7.4 * i}deg)">${char}</span>`
        ).join('');
    })


    $('.main_content').fullpage({
        anchors: ['main_vi', 'main_coll', 'main_view'],
        navigation: false,
        css3: false,
        //반응형에서 fullpage 안하기.
        responsiveWidth: 700,
        //넘치는 부분 스크롤 하기.
        scrollOverflow: true,
        afterRender: function () {
            $('.main_content .section').eq(0).addClass('on');
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.main_content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
        onLeave: function (idx, nidx, dir) {
            // $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            // console.log(idx, nidx, dir);

            if (dir == 'up') {
                $('.header').addClass('on');
            } else {
                $('.header').removeClass('on');
            }

        }
    });

    $('.btn_lang').on('click', function () {
        $(this).toggleClass('on');
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        pauseOnHover: false,
        pauseOnFocus: false,
    });


    $('.main_slide').on('init afterChange', function (e, s, c) {

        $('.main_vi .slide_num span').text("0" + (c ? (c + 1) : 1));
        $('.main_vi .slide_num strong').text("0" + (s.slideCount));
    });

    $('.main_vi .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });

    $('.main_vi .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    $('.con_list').slick({
        arrows: false,
        dots: true,
        fade: true,
    });


    $('.con_list').on('init afterChange', function (e, s, c) {
        $('.tap_list li').eq(c).addClass('on').siblings().removeClass('on');
    });

    $('.main_coll .arrows .left').on('click', function () {
        $('.con_list').slick('slickPrev');
    });

    $('.main_coll .arrows .right').on('click', function () {
        $('.con_list').slick('slickNext');
    });


    $('.main_coll .tap_list>li').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');

        $('.con_list').slick('slickGoTo', idx);
    });

    $('.view_slide').slick({
        arrows: false,
        dots: true,
    });

    $('.main_view .itm_box>*').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.main_view .arrows .left').on('click', function () {
        $('.view_slide').slick('slickPrev');
    });

    $('.main_view .arrows .right').on('click', function () {
        $('.view_slide').slick('slickNext');
    });
});