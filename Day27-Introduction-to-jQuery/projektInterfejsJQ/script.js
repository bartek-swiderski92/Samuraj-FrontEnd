$('.interface').on('click', function () {
    // console.log($(this).attr('class'));
    if ($(this).hasClass("orange")) {
        $('body').attr("class", "orange")

        // console.log('orange');
        // $('body').css("backgroundColor", 'orange');
        // $('body').toggleClass("orange")
        // OBJECT
        // $('body').css({
        //     "backgroundColor": "orange"
        // })
    } else if (this.classList.contains('green')) {
        // console.log("green");
        $('body').attr("class", "green")
    } else if ($(this).hasClass("increase")) {
        $('.text').animate({
            "font-size": "+=12"
        }, 500)
    } else {
        $('.text').animate({
            "left": "+=15px",
            "letter-spacing": "+=6px"
        })
    }
})