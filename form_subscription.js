var formulario = document.getElementById('form');
var inputs = document.querySelectorAll('#form input')
var expresions = {
    completename: /^[a-zA-ZÀ-ÿ\s]{6,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password1: /^[a-zA-Z0-9]{8,16}$/,
    ages:  / ^ \ d{2}$ /,
    phone:  /^\d{7,14}$/,
    nameadress: /^[a-zA-Z0-9\s]{5,40}$/,
    capitacity: /^[a-zA-Z\s]{3,20}$/,
    codepostal: /^\d{3,5}$/,
    identidy: /^\d{7,8}$/
}

var fields = {
    completename: false,
    correo: false,
    password: false,
    ages: false,
    phone: false,
    nameadress: false,
    capitacity: false,
    codepostal: false,
    identidy: false
}




var validateform2 = function validatecampo2(e){
    switch(e.target.name){
        case "namecomplete":
            document.getElementById('group_namecomplete').classList.remove('form_group-wrong');
            document.getElementById('group_namecomplete').classList.remove('form_group-correct'); 
            document.querySelector('#group_namecomplete .form_input-error').classList.remove('form_input-error-active');
        break;
        case "email":
            document.getElementById('group_email').classList.remove('form_group-wrong');
            document.getElementById('group_email').classList.remove('form_group-correct'); 
            document.querySelector('#group_email .form_input-error').classList.remove('form_input-error-active');
        break;
        case "password":
            document.getElementById('group_password').classList.remove('form_group-wrong');
            document.getElementById('group_password').classList.remove('form_group-correct'); 
            document.querySelector('#group_password .form_input-error').classList.remove('form_input-error-active');
        break;
        case "password2":
            document.getElementById('group_password2').classList.remove('form_group-wrong');
            document.getElementById('group_password2').classList.add('form_group-correct');
            document.querySelector('#group_password2 .form_input-error').classList.remove('form_input-error-active');
        break;
        case "age":
            document.getElementById('group_age').classList.remove('form_group-wrong');
            document.getElementById('group_age').classList.remove('form_group-correct');
            document.querySelector('#group_age .form_input-error').classList.remove('form_input-error-active');
        break;
        case "TelephoneNumber":
            document.getElementById('group_TelephoneNumber').classList.remove('form_group-wrong');
            document.getElementById('group_TelephoneNumber').classList.remove('form_group-correct'); 
            document.querySelector('#group_TelephoneNumber .form_input-error').classList.remove('form_input-error-active');
        break;
        case "Adress":
            document.getElementById('group_Adress').classList.remove('form_group-wrong');
            document.getElementById('group_Adress').classList.remove('form_group-correct'); 
            document.querySelector('#group_Adress .form_input-error').classList.remove('form_input-error-active');
        break;
        case "city":
            document.getElementById('group_city').classList.remove('form_group-wrong');
            document.getElementById('group_city').classList.remove('form_group-correct'); 
            document.querySelector('#group_city .form_input-error').classList.remove('form_input-error-active');
        break;
        case "postalcode":
            document.getElementById('group_postalcode').classList.remove('form_group-wrong');
            document.getElementById('group_postalcode').classList.remove('form_group-correct'); 
            document.querySelector('#group_postalcode .form_input-error').classList.remove('form_input-error-active');
        break;
        case "dni":
            document.getElementById('group_dni').classList.remove('form_group-wrong');
            document.getElementById('group_dni').classList.remove('form_group-correct'); 
            document.querySelector('#group_dni .form_input-error').classList.remove('form_input-error-active');
        break;            
    }
}



var validateform = function validatecampo(e){
    switch (e.target.name) {
        case "namecomplete":
            if (expresions.completename.test(e.target.value)){
                document.getElementById('group_namecomplete').classList.remove('form_group-wrong');
                document.getElementById('group_namecomplete').classList.add('form_group-correct'); 
                document.querySelector('#group_namecomplete .form_input-error').classList.remove('form_input-error-active');
                fields.completename = true;
                //fullname = document.getElementById('namecomplete').value;
            }else {
                document.getElementById('group_namecomplete').classList.add('form_group-wrong');
                document.getElementById('group_namecomplete').classList.remove('form_group-correct');
                document.querySelector('#group_namecomplete .form_input-error').classList.add('form_input-error-active');
                fields.completename = false;
            }     
        break;
        case "email":
            if (expresions.correo.test(e.target.value)){
                document.getElementById('group_email').classList.remove('form_group-wrong');
                document.getElementById('group_email').classList.add('form_group-correct'); 
                document.querySelector('#group_email .form_input-error').classList.remove('form_input-error-active');
                fields.correo = true;
            }else {
                document.getElementById('group_email').classList.add('form_group-wrong');
                document.getElementById('group_email').classList.remove('form_group-correct');
                document.querySelector('#group_email .form_input-error').classList.add('form_input-error-active');
                fields.correo = false;
            }
        break;
        case "password":
            if (expresions.password1.test(e.target.value)){
                document.getElementById('group_password').classList.remove('form_group-wrong');
                document.getElementById('group_password').classList.add('form_group-correct'); 
                document.querySelector('#group_password .form_input-error').classList.remove('form_input-error-active');
                fields.password = true;
            }else {
                document.getElementById('group_password').classList.add('form_group-wrong');
                document.getElementById('group_password').classList.remove('form_group-correct');
                document.querySelector('#group_password .form_input-error').classList.add('form_input-error-active');
                fields.password = false;
            }
        break;
        case "password2":
            validatepassword2();
        break;
        case "age":
            validateage();
        break;
        case "TelephoneNumber":
            if (expresions.phone.test(e.target.value)){
                document.getElementById('group_TelephoneNumber').classList.remove('form_group-wrong');
                document.getElementById('group_TelephoneNumber').classList.add('form_group-correct'); 
                document.querySelector('#group_TelephoneNumber .form_input-error').classList.remove('form_input-error-active');
                fields.phone = true;
            }else {
                document.getElementById('group_TelephoneNumber').classList.add('form_group-wrong');
                document.getElementById('group_TelephoneNumber').classList.remove('form_group-correct');
                document.querySelector('#group_TelephoneNumber .form_input-error').classList.add('form_input-error-active');
                fields.phone = false;
            }
        break;
        case "Adress":
            if (expresions.nameadress.test(e.target.value)){
                document.getElementById('group_Adress').classList.remove('form_group-wrong');
                document.getElementById('group_Adress').classList.add('form_group-correct'); 
                document.querySelector('#group_Adress .form_input-error').classList.remove('form_input-error-active');
                fields.nameadress = true;
            }else {
                document.getElementById('group_Adress').classList.add('form_group-wrong');
                document.getElementById('group_Adress').classList.remove('form_group-correct');
                document.querySelector('#group_Adress .form_input-error').classList.add('form_input-error-active');
                fields.nameadress = false;
            }
        break;
        case "city":
            if (expresions.capitacity.test(e.target.value)){
                document.getElementById('group_city').classList.remove('form_group-wrong');
                document.getElementById('group_city').classList.add('form_group-correct'); 
                document.querySelector('#group_city .form_input-error').classList.remove('form_input-error-active');
                fields.capitacity = true;
            }else {
                document.getElementById('group_city').classList.add('form_group-wrong');
                document.getElementById('group_city').classList.remove('form_group-correct');
                document.querySelector('#group_city .form_input-error').classList.add('form_input-error-active');
                fields.capitacity = false;
            }
        break;
        case "postalcode":
            if (expresions.codepostal.test(e.target.value)){
                document.getElementById('group_postalcode').classList.remove('form_group-wrong');
                document.getElementById('group_postalcode').classList.add('form_group-correct'); 
                document.querySelector('#group_postalcode .form_input-error').classList.remove('form_input-error-active');
                fields.codepostal = true;
            }else {
                document.getElementById('group_postalcode').classList.add('form_group-wrong');
                document.getElementById('group_postalcode').classList.remove('form_group-correct');
                document.querySelector('#group_postalcode .form_input-error').classList.add('form_input-error-active');
                fields.codepostal = false;
            }
        break;
        case "dni":
            if (expresions.identidy.test(e.target.value)){
                document.getElementById('group_dni').classList.remove('form_group-wrong');
                document.getElementById('group_dni').classList.add('form_group-correct'); 
                document.querySelector('#group_dni .form_input-error').classList.remove('form_input-error-active');
                fields.identidy = true;
            }else {
                document.getElementById('group_dni').classList.add('form_group-wrong');
                document.getElementById('group_dni').classList.remove('form_group-correct');
                document.querySelector('#group_dni .form_input-error').classList.add('form_input-error-active');
                fields.identidy = false;
            }
        break;
    }

}



function validatepassword2(){
    var inputPassword1 = document.getElementById('password');
    var inputPassword2 = document.getElementById('password2');
    if(inputPassword1.value === inputPassword2.value){
        document.getElementById('group_password2').classList.remove('form_group-wrong');
        document.getElementById('group_password2').classList.add('form_group-correct');
        document.querySelector('#group_password2 .form_input-error').classList.remove('form_input-error-active');
        fields.password = true;
    } else {
        document.getElementById('group_password2').classList.add('form_group-wrong');
        document.getElementById('group_password2').classList.remove('form_group-correct');
        document.querySelector('#group_password2 .form_input-error').classList.add('form_input-error-active');
        fields.password = false;
    }
}



function validateage(){
    var inputAge = document.getElementById('age');
    if(inputAge.value >= 18){
        document.getElementById('group_age').classList.remove('form_group-wrong');
        document.getElementById('group_age').classList.add('form_group-correct');
        document.querySelector('#group_age .form_input-error').classList.remove('form_input-error-active');
        fields.ages = true;
    } else {
        document.getElementById('group_age').classList.add('form_group-wrong');
        document.getElementById('group_age').classList.remove('form_group-correct');
        document.querySelector('#group_age .form_input-error').classList.add('form_input-error-active');
        fields.ages = false;
    }
}



inputs.forEach(function validateinputs(input){
    input.addEventListener('blur', validateform);
    input.addEventListener('focus', validateform2);
})

formulario.addEventListener('submit', function formu(e){
    e.preventDefault();
    
    if(fields.completename && fields.correo && fields.password && fields.phone && fields.nameadress && fields.identidy && fields.codepostal && fields.ages && fields.capitacity){
        
        

        document.getElementById('form_message-sucess').classList.add('form_message-sucess-active');
        setTimeout(() => {
            document.getElementById('form_message-sucess').classList.remove('form_message-sucess-active');
        }, 5000);

        var fullname = document.getElementById('namecomplete').value;
        var fullemail = document.getElementById('email').value;
        var fullpassword = document.getElementById('password').value;
        var fullage = document.getElementById('age').value;
        var fullphone = document.getElementById('TelephoneNumber').value;
        var fulladress = document.getElementById('Adress').value;
        var fullcity = document.getElementById('city').value;
        var fullpostalcode = document.getElementById('postalcode').value;
        var fulldni = document.getElementById('dni').value;


        alert('Name: ' + fullname + ';' + ' Email: ' + fullemail + ';' + ' Password: ' + fullpassword + ';' + ' Age: ' + fullage 
        + ';' + ' Telephone: ' + fullphone + ';' + ' Adress: ' + fulladress + ';' + ' City: ' + fullcity + ';' + ' Postal Code ' + fullpostalcode + ';' + ' DNI: ' + fulldni);


        formulario.reset(); 

        document.querySelectorAll('.form_group-correct').forEach((enter) =>{
            enter.classList.remove('form_group-correct')
        })

        

    } else {
        alert('Por favor corrige los campos en rojo');
        /*document.getElementById('form_message').classList.add('form_message-active');
        setTimeout(() => {
            document.getElementById('form_message').classList.remove('form_message-active');
        }, 5000);*/
    }






})
