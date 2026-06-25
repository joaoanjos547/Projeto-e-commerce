const form =
document.getElementById(
"cadastroForm"
);

if(form){

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const nome =
document.getElementById(
"nome"
).value;

const email =
document.getElementById(
"email"
).value;

const senha =
document.getElementById(
"senha"
).value;

const confirmar =
document.getElementById(
"confirmarSenha"
).value;

if(senha !== confirmar){

alert(
"As senhas não coincidem!"
);

return;
}

const usuario = {

nome,
email,
senha

};

localStorage.setItem(
"usuario",
JSON.stringify(usuario)
);

alert(
"Cadastro realizado com sucesso!"
);

window.location.href =
"index.html";

});

}
