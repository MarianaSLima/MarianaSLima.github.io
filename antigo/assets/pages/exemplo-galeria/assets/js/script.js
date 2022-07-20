//COMENTA A LINHA

/*
COMENTA
UM 
BLOCO
*/ 

//document
//window

//window.alert("isso é um alerta");


let titulo = document.getElementById("titulo");

console.log(titulo);

titulo.innerHTML("novo texto");

var descricaoarea = document.getElementsByClassName(`descricao-area`);
console.log(descricaoarea);

descricaoarea.forEach(element => {
    element.innerHTML = 'novo texto';
});


for(let i = 0; descricaoarea.length; i++){
    let elemento = descricaoarea[i];
    elemento.innerHTML = 'Novo texto ' + i;
}

var arrayelementos = [...descricaoarea];
arrayelementos.forEach(element => {
    element.innerHTML = 'novo texto';
});

var card = document.querySelector('.card');
card.style.display =  'none';

var card = document.querySelector('.card');
card.forEach(element => {
    element,style.display = 'none';
});




function handleColuna(){

    var galeriaRow = document.querySelector('.galeria-row');
    galeriaRow.classList.add('coluna');

}
function handleLinha(){

    var galeriaRow = document.querySelector('.galeria-row');
    galeriaRow.classList.add('linha');

}
function limparClass(){
    var galeriaRow = document.querySelector('.galeria-row');
    galeriaRow.classList.remove('linha');
    galeriaRow.classList.remove('coluna');

    var corverde = document.querySelector('.descricao-area');
    corverde.classList.remove('verde');


}

function handleForm(event){
    event.preventDefault();

    let inputs = document.querySelectorAll('input');

    inputs.forEach(input => {

        console.log(input.value);

    });
}

let form  = document.querySelector('.validar-form');
form.addEventListener('submit', handleForm);
