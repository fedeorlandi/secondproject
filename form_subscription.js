var formulario =document.getElementById('form');
var inputs = document.querySelectorAll('#form input')









var validateform = function validatecampo(e){
    switch (e.target.name) {
        case "namecomplete":
            if (e.target.value === 'Federico'){
                console.log('crackfede');
            }
        break;
        case "email":

        break;
        case "password":

        break;
        case "age":

        break;
        case "TelephoneNumber":

        break;
        case "Adress":

        break;
        case "city":

        break;
        case "postalcode":

        break;
        case "dni":

        break;
    }

}





inputs.forEach(function validateinputs(input){
    input.addEventListener('blur', validateform);
})





formulario.addEventListener('submit', function validate(e){
    e.preventDefault();
});