var regExpName = /^[a-z A-Z'-]{2,32}$/;
var regExpEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var regExpPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


$('#registerBtn').click(function (event) {
    event.preventDefault();

    if (regExpName.test($('#name').val()) && regExpEmail.test($('#newemail').val()) && regExpPassword.test($('#newpwd').val())) {
        $('.modal').modal('hide');
        $('#registerSuccess').fadeToggle('fast', 'linear');
        setTimeout(function () {
            $('#registerSuccess').fadeToggle('fast','linear') }
            , 5000)
        }


        if (!regExpName.test($('#name').val())) {
            $('#nameAlert').show();
            $('#emailAlert').show()
            $('#passwordAlert').show()
        }

        if(!regExpEmail.test($('#newemail').val())) {
            $('#emailAlert').show()
        }
        if(!regExpPassword.test($('#newpwd').val())) {
            $('#passwordAlert').show()
        }
    }
);

$('#newpwd').focus(function () {
    $('#passwordAlert').hide()
})

;$('#newemail').focus(function () {
    $('#emailAlert').hide()
})

;$('#name').focus(function () {
    $('#nameAlert').hide()
});