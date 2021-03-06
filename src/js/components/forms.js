$("#callForm .modal__btn").click(function (e) {
    e.preventDefault()
    if(callFormValidate()) {
        $('.modal').removeClass("modal--active")
        $('#thankModal').addClass("modal--active")
    }
})

function callFormValidate(){
    let phoneIsValid = false
    let emailNameIsValid = false


    let phoneInput = $("#callForm input[name='tel']")
    phoneIsValid = phoneFieldValidate($(phoneInput))

    let emailInput = $("#callForm input[name='email']")
    emailNameIsValid = emailFieldValidate($(emailInput))


    if(phoneIsValid && emailNameIsValid) {
        return true
    } else{
        return false
    }
}

$("#ecpForm .modal__btn").click(function (e) {
    e.preventDefault()
    if(ecpFormValidate()) {
        $('.modal').removeClass("modal--active")
        $('#thankModal').addClass("modal--active")
    }
})

function ecpFormValidate(){
    let phoneIsValid = false


    let phoneInput = $("#ecpForm input[name='tel']")
    phoneIsValid = phoneFieldValidate($(phoneInput))


    if(phoneIsValid) {
        return true
    } else{
        return false
    }
}

$("#consultForm .modal__btn").click(function (e) {
    e.preventDefault()
    if(consultFormValidate()) {
        $('.modal').removeClass("modal--active")
        $('#thankModal').addClass("modal--active")
    }
})

function consultFormValidate(){
    let phoneIsValid = false
    let emailNameIsValid = false

    let phoneInput = $("#consultForm input[name='tel']")
    phoneIsValid = phoneFieldValidate($(phoneInput))


    let emailInput = $("#consultForm input[name='email']")
    emailNameIsValid = emailFieldValidate($(emailInput))


    if(phoneIsValid && emailNameIsValid) {
        return true
    } else{
        return false
    }
}


function fieldIsEmpty(field) {
    let fieldVal = $(field).val()

    if (fieldVal) {
        $(field).removeClass("error")
        return true
    } else {
        $(field).addClass("error")
        return false
    }
}


function phoneFieldValidate(field) {
    let fieldVal = $(field).val()
    fieldVal = fieldVal.replaceAll('_', '').length;

    if (fieldVal === 18) {
        $(field).removeClass("error")
        return true
    } else {
        $(field).addClass("error")
        return false
    }
}


function emailFieldValidate(field) {
    let emailPattern = pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    let fieldVal = $(field).val()

    if(!fieldVal){
        return true
    }

    if(fieldVal.match(emailPattern) && fieldVal){
        $(field).removeClass("error")
        return true
    }
    else{
        $(field).addClass("error")
        return false
    }
}
