$('#btn').on('click', function () {

    var btnIcon = $('#btn i')
    // var $btnIcon = $('#btn i')
    //  頭に$をつけておくとjQueryのオブジェクトであることが分かりやすくなる。つけなくてもよい

    $('body').toggleClass('open')

    //bodyがopenのクラスを持っているか
    //    console.log($('body').hasClass('open'))

    if ($('body').hasClass('open')) {

        // $('#btn i')
        btnIcon
            .removeClass('ri-menu-line')
            .addClass('ri-close-line')
    } else {
        // $('#btn i')
        btnIcon
            .removeClass('ri-close-line')
            .addClass('ri-menu-line')
    }



})