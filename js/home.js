//functions

function validaBusca() {
    if (document.querySelector('#q').value === '') {
        document.querySelector('#q').style.background = 'red';
        return false;
    }
}

//events
document.querySelector('#form-busca').attachEvent('onsubmit', function() {
    validaBusca();
});
