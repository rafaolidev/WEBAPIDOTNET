
/* PRODUTOS */
//carrega lista de produtos com request http para api
function getProduct(url) {
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}
function delelteProduct(url) {
    let request = new XMLHttpRequest()
    request.open("DELETE",url,false)
    request.send()
}
//criar linhas da tabela com dados dos produtos
function criarLinhaProduto (produto) {

    linha = document.createElement('tr');
    tdId = document.createElement('td');
    tdProduto = document.createElement('td');
    tdQuantidade = document.createElement('td');
    tdData = document.createElement('td');
    tdTipo = document.createElement('td');

    tdId.innerHTML = produto.id;
    tdProduto.innerHTML = produto.productname;
    tdQuantidade.innerHTML = produto.quantidade;
    tdData.innerHTML = produto.criadoEm;
    tdTipo.innerHTML = produto.tipo;

    linha.appendChild(tdId);
    linha.appendChild(tdProduto);
    linha.appendChild(tdQuantidade);
    linha.appendChild(tdTipo);
    linha.appendChild(tdData);



    return linha;
}
// carrega a lista de produtos fazendo uma request para api
function loadProductData() {

    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let userId = urlParams.get('id');
    let data = getProduct(`http://localhost:5095/user/${userId}`);
    let movementData = JSON.parse(data);
    let tabela = document.getElementById('tabela-movimentacoes');
    let user = getProduct(`http://localhost:5095/api/Users/${userId}`);
    let userData = JSON.parse(user);
    let divUser = document.getElementById('user_name');
    divUser.innerHTML = userData.userName;
    movementData.forEach( async element => {
        let produto = getProduct(`http://localhost:5095/api/Product/${element.productId}`);
        let productData = JSON.parse(produto);
        console.log(element);
        console.log(produto);
        element.productname = productData.name;

        let linha = criarLinhaProduto(element);
        tabela.appendChild(linha)
    });
}
loadProductData(this.product);