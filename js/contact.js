$.post($("#contact-us-form").attr('action'), JSON.stringify({
    name: $("#contact-us-form input[name='name']").val(),
    email: $("#contact-us-form input[name='email']").val(),
    message: $("#contact-us-form textarea[name='message']").val(),
    'g-recaptcha-response': $("#contact-us-form textarea[name='g-recaptcha-response']").val()
}), function (data) {
    $(".thanks").show();
    $("#contact-us-form button").hide();
}, 'json');