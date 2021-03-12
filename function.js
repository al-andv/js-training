document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#check").
        addEventListener('click', function () {

        checkName();
        checkAge();
        checkEmail();
        checkPhone();

    });
});

function checkName() {
    var name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("name-error").innerHTML =
            "Vui lòng nhập tên !";
    } else if (Number.isInteger(parseInt(name)) === true) {
        document.getElementById("name-error").innerHTML =
            "Tên không được là số !";
    } else if (name.length <= 6) {
        document.getElementById("name-error").innerHTML =
            "Tên phải dài hơn 6 kí tự !";
    } else {
        document.getElementById("name-error").innerHTML = "";
    }
}

function checkAge() {
    var tuoi = document.getElementById("age").value;
    var age = parseInt(tuoi);
    if (tuoi.trim() === "") {
        document.getElementById("age-error").innerHTML =
            "Vui lòng nhập tuổi !";
    } else if (Number.isInteger(age) === false) {
        document.getElementById("age-error").innerHTML =
            "Tuổi của bạn phải là số !";
    } else if (age <= 18) {
        document.getElementById("age-error").innerHTML =
            "Tuổi phải lớn hơn 18 !";
    } else {
        document.getElementById("age-error").innerHTML = "";
    }
}

function checkEmail() {
    var email = document.getElementById("email").value;
    //regex kiem tra mail dung dinh dang khong
    var regEmail =
        /^[a-z0-9]+([-._][a-z0-9]+)*@([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{1,5}$/;
    if (email.trim() === "") {
        document.getElementById("email-error").innerHTML =
            "Vui lòng nhập email !";
    } else if (regEmail.test(email) === false) {
        document.getElementById("email-error").innerHTML =
            "Email không đúng định dạng !";
    } else {
        document.getElementById("email-error").innerHTML = "";
    }
}

function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regPhone = /^(0[23789][0-9]{8}|1[89]00[0-9]{4})$/;
    if (phone.trim() === "") {
        document.getElementById("phone-error").innerHTML =
            "Vui lòng nhập số điện thoại !";
    } else if (regPhone.test(phone) === false) {
        document.getElementById("phone-error").innerHTML =
            "Số điện thoại không hợp lệ !";
    } else {
        document.getElementById("phone-error").innerHTML = "";
    }
}