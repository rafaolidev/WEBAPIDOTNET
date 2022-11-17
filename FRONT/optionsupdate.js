function optionsProductUpdateId()
{
 //DA UM GET NO ENDPOINT DE LISTAR USUARIOS
 fetch('http://localhost:5095/api/Product')
 .then(response => response.json())
 .then((produtos) =>
 {
 //PEGA OPTION VAZIA NO HTML
 let selProdutosUpdate = document.getElementById('productId-UPDATE');

 //PREENCHE ELA COM O NOME E O ID DOS USUARIOS
 for(let produto of produtos)
 {
 let optProduto = document.createElement('option')
 optProduto.innerHTML = produto.name
 optProduto.value = produto.id
 selProdutosUpdate.appendChild(optProduto)
 }
 })
}
optionsProductUpdateId();