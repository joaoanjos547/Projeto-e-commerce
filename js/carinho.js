let carrinho = JSON.parse(
localStorage.getItem("carrinho")
) || [];

function addToCart(id){
const produtos = [

{
id:1,
nome:"Cargo Blossom Black",
preco:219.90
},

{
id:2,
nome:"BRAVUS Mask Hoodie",
preco:249.90
},

{
id:3,
nome:"Riot Cargo V2",
preco:229.90
},

{
id:4,
nome:"Cyber Shadow Pants",
preco:199.90
},

{
id:5,
nome:"Phantom Hoodie",
preco:259.90
}

];

const produto =
produtos.find(
p => p.id === id
);

carrinho.push(produto);

localStorage.setItem(
"carrinho",
JSON.stringify(carrinho)
);

atualizarContador();

alert(
produto.nome +
" adicionado ao carrinho!"
);

}

function atualizarContador(){

const contador =
document.getElementById(
"cart-count"
);

if(contador){

contador.innerHTML =
carrinho.length;

}

}

atualizarContador();
