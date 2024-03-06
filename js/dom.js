console.log(document.title);
document.title = 'PRUEBA NUMERO 1';
console.log(document.title);

var h5 = document.getElementsByTagName('h5');
h5[0].innerHTML = 'Prueba';

console.log(h5);

var boton = document.getElementById('boton');
console.log(boton);

boton.addEventListener('click', mensaje);

function mensaje(){
    alert('Mensaje')
}
