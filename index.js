var interval;

function countdown() {
    clearInterval(interval);
    interval = setInterval(function () {
        var timer = $('.js-timeout').html();
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

        $('.js-timeout').html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0) {
            clearInterval(interval);
            $('.time-counter').toggleClass('d-none');
            $('.show-resend-code').toggleClass('d-block');
        }

    }, 1000);
}

countdown();
// setTimeout(() => {
//     console.log("Delayed for 1 second.");
//   }, "1000");
$(document).ready(function () {
    $(".show-resend-code").on("click", function () {
        $('.time-counter').removeClass('d-none');
        $('.time-counter').addClass('d-block');
        $('.show-resend-code').removeClass('d-block');
        $('.show-resend-code').addClass('d-none');
        console.log($('.js-timeout').html())
        $('.js-timeout').html('02:00');
        countdown();
    });
});
var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");
var form_5 = document.querySelector(".form_5");
var form_6 = document.querySelector(".form_6");
var form_7 = document.querySelector(".form_7");
var form_8 = document.querySelector(".form_8");


var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");
var form_5_btns = document.querySelector(".form_5_btns");
var form_6_btns = document.querySelector(".form_6_btns");
var form_7_btns = document.querySelector(".form_7_btns");


var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
// var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");
var form_3_next_btn = document.querySelector(".form_3_btns .btn_next");
var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");
var form_4_next_btn = document.querySelector(".form_4_btns .btn_next");
var form_5_back_btn = document.querySelector(".form_5_btns .btn_back");
var form_5_next_btn = document.querySelector(".form_5_btns .btn_next");
var form_6_back_btn = document.querySelector(".form_6_btns .btn_back");
var form_6_next_btn = document.querySelector(".form_6_btns .btn_next");
var form_7_back_btn = document.querySelector(".form_7_btns .btn_back");
var form_7_next_btn = document.querySelector(".form_7_btns .btn_next");
// var form_8_back_btn = document.querySelector(".form_5_btns .btn_back");


var btn_done = document.querySelector(".btn_done");
var shadow = document.querySelector(".shadow");


// let OnClickBtnNext = ( id )=> {
//     form_(id).style.display = "none";
// 	form_(id++).style.display = "block";
//     let formbtnid = form_ +`${id}` +_btns
// 	formbtnid.style.display = "none";
//     let formbtnid2 = form_ +`${id++}` +_btns
// 	formbtnid2.style.display = "flex";
// }


form_1_next_btn.addEventListener("click", function (e) {

    ////ارسال مشخصات
    let formdata = {
        FullName: $("#fullname").val(),
        MobileNumber: $("#phonenumber").val(),
        captcha: $("#form_1").find("input[name='captcha']").val()
    }

    $("input").removeClass("input-border-red");
    if (formdata.FullName == "") {
        $("input[name=FullName]").addClass("input-border-red");
    }
    if (formdata.MobileNumber == "") {
        $("input[name=MobileNumber]").addClass("input-border-red");
    }
    if (formdata.captcha == "") {
        $("input[name=captcha]").addClass("input-border-red");
    }
    //console.log($("#form_1").serialize() ,formdata);

    // $.ajax({
    //     url: '/competitions/',
    //     type: 'GET',
    //     data: $("#form_1").serialize(),
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     dataType: 'json',
    //     success: function (data) {
    //         console.log("success", data)
    //         if (data.value == "captcha") {
    //             console.log("Captcha");
    //             $(".captcha-danger").addClass('d-block');
    //         }
    //         else if (data.value == "Registered") {
    //             console.log("RegisteredUser");
    //             $(".phone-duplicate").text("این شماره قبلا در مسابقه شرکت کرده است").addClass('d-block');

    //         } else if (data.value == "SMS") {
    //             console.log("Problem In sending SMS");
    //             $(".phone-duplicate").text("اشکال در ارسال پیامک، لطفا مجددا سعی کنید").addClass('d-block');

    //         }
    //         else {
    //             form_1.style.display = "none";
    //             form_2.style.display = "block";

    //             form_1_btns.style.display = "none";
    //             form_2_btns.style.display = "flex";
    //         }

    //     },
    //     error: function (e) {
    //         console.log("fail", e)
    //     }
    // });
    form_1.style.display = "none";
    form_2.style.display = "block";

    form_1_btns.style.display = "none";
    form_2_btns.style.display = "flex";
    //form_1.style.display = "none";
    //form_2.style.display = "block";

    //form_1_btns.style.display = "none";
    //form_2_btns.style.display = "flex";

});

form_2_back_btn.addEventListener("click", function () {
    form_1.style.display = "block";
    form_2.style.display = "none";

    form_1_btns.style.display = "flex";
    form_2_btns.style.display = "none";



});

form_2_next_btn.addEventListener("click", function () {


    let formdatacode = $("#code4").val() + $("#code3").val() + $("#code2").val() + $("#code1").val();

    console.log(formdatacode)
    /* کد تایید*/
    // $.ajax({
    //     url: '/competitions/VerifyMobile/',
    //     type: 'GET',
    //     data:
    //         { code: formdatacode },
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     dataType: 'json',
    //     success: function (data) {
    //         console.log("success", data)
    //         if (data.value == "CodeNotFound") { 
    //             $("#wrong-code").text("کد وارد نشده است").addClass('d-block');
    //             //console.log("Code Not Entered");
    //         } else if (data.value == "SessionExpired") {
    //             $("#wrong-code").text("کد را دیر وارد کردید ").addClass('d-block');
    //             //console.log("SessionExpired");
    //         } else if (data.value == "WrongCode") {
    //             $("#wrong-code").text("کد وارد شده صحیح نمیباشد").addClass('d-block');
    //             //console.log("WrongCode");
    //         } else {
    //             form_3_btns.style.display = "flex";
    //             form_2_btns.style.display = "none";

    //             form_2.style.display = "none";
    //             form_3.style.display = "block";
    //         }

    //     },
    //     error: function (e) {
    //         console.log("fail", e)
    //     }
    // });
    form_3_btns.style.display = "flex";
    form_2_btns.style.display = "none";

    form_2.style.display = "none";
    form_3.style.display = "block";

    //form_3_btns.style.display = "flex";
    //form_2_btns.style.display = "none";

    //form_2.style.display = "none";
    //form_3.style.display = "block";
});

/*ارسال مجدد کد*/
var resend = $(".show-resend-code");
$(".show-resend-code").on("click", function () {
    $.ajax({
        url: '/competitions/ResendVerificationCode',
        type: 'POST',
        data: '',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        dataType: 'json',
        success: function (data) {
            console.log("success", data)
        },
        error: function (e) {
            console.log("fail", e)
        }
    });

});

$("#svg-close").on("click", function () {
    $('#comp1').removeClass("d-block");
}
);
/**/
var answers = [];

form_3_next_btn.addEventListener("click", function () {
    if ($('input[name=q1]:checked').length) {
        console.log($('input[name=q1]:checked').val());
        form_3.style.display = "none";
        form_4.style.display = "block";
        answers.push($('input[name=q1]:checked').val());
        form_4_btns.style.display = "flex";
        form_3_btns.style.display = "none";
    }
    else {
        $('span.message1').text('یک گزینه باید انتخاب شود');
    }
});
console.log('asna', answers)
form_4_back_btn.addEventListener("click", function () {
    form_3.style.display = "block";
    form_4.style.display = "none";

    form_3_btns.style.display = "flex";
    form_4_btns.style.display = "none";

});

form_4_next_btn.addEventListener("click", function () {
    if ($('input[name=q2]:checked').length) {
        console.log($('input[name=q2]:checked').val());
        form_4.style.display = "none";
        form_5.style.display = "block";
        answers.push($('input[name=q2]:checked').val());
        form_5_btns.style.display = "flex";
        form_4_btns.style.display = "none";
    }
    else {
        $('span.message2').text('یک گزینه باید انتخاب شود');
    }

});

form_5_back_btn.addEventListener("click", function () {
    form_4.style.display = "block";
    form_5.style.display = "none";

    form_4_btns.style.display = "flex";
    form_5_btns.style.display = "none";

});

form_5_next_btn.addEventListener("click", function () {
    if ($('input[name=q3]:checked').length) {
        console.log($('input[name=q3]:checked').val());

        form_5.style.display = "none";
        form_6.style.display = "block";
        answers.push($('input[name=q3]:checked').val());
        form_6_btns.style.display = "flex";
        form_5_btns.style.display = "none";
    }
    else {
        $('span.message3').text('یک گزینه باید انتخاب شود');
    }

});

form_6_back_btn.addEventListener("click", function () {
    form_5.style.display = "block";
    form_6.style.display = "none";

    form_5_btns.style.display = "flex";
    form_6_btns.style.display = "none";

});

form_6_next_btn.addEventListener("click", function () {
    if ($('input[name=q4]:checked').length) {
        console.log($('input[name=q4]:checked').val());

        form_6.style.display = "none";
        form_7.style.display = "block";
        answers.push($('input[name=q4]:checked').val());
        form_7_btns.style.display = "flex";
        form_6_btns.style.display = "none";
    }
    else {
        $('span.message4').text('یک گزینه باید انتخاب شود');
    }

});

form_7_back_btn.addEventListener("click", function () {
    form_6.style.display = "block";
    form_7.style.display = "none";

    form_6_btns.style.display = "flex";
    form_7_btns.style.display = "none";

});

form_7_next_btn.addEventListener("click", function () {
    if ($('input[name=q5]:checked').length) {
        console.log($('input[name=q5]:checked').val());
        answers.push($('input[name=q5]:checked').val());
        console.log(answers);
        $.ajax({
            url: '/competitions/saveanswers/',
            type: 'GET',
            data: {answers: answers.join(',')},
            success: function (data) {
                console.log("success")
            },
            error: function (e) {
                console.log("fail")
            }
        });

        form_7.style.display = "none";
        form_8.style.display = "block";

        form_7_btns.style.display = "none";
    }
    else {
        $('span.message5').text('یک گزینه باید انتخاب شود');
    }

});









// Get q Input
/*$("input[name='optradio']:checked").val();*/

