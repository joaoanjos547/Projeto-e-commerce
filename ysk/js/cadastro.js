const form = document.getElementById("cadastroForm");

form.addEventListener("submit", function(event){

event.preventDefault();

let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;

if(nome === "" || email === "" || senha === ""){
    alert("Preencha todos os campos!");
    return;
}

if(senha.length < 6){
    alert("A senha deve possuir pelo menos 6 caracteres.");
    return;
}

alert("Cadastro realizado com sucesso!");

form.reset();

});