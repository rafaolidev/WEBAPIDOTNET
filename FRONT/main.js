/* USUÁRIOS */
//carrega lista de usuários com request http para api
function getUser(url) {
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}
function delelteUser(url) {
    let request = new XMLHttpRequest()
    request.open("DELETE",url,false)
    request.send()
}
//criar linhas da tabela com dados dos usuários
function criarLinha (usuario) {

    linha = document.createElement('tr');
    tdId = document.createElement('td');
    tdNome = document.createElement('td');
    tdEmail = document.createElement('td');
    tdAcao = document.createElement('td');

    tdId.innerHTML = usuario.id;
    tdNome.innerHTML = usuario.name;
    tdNome.innerHTML = usuario.userName;
    tdEmail.innerHTML = usuario.email;
    tdAcao.innerHTML = `<a class="editar"><button onclick="deleteData(${usuario.id})" class="ver-button">Excluir</button></a>
    <a class="editar" href="minhasmovimentacoes.html?id=${usuario.id}"><button onclick="" class="ver-button">Movimentações</button></a>`;

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdEmail);
    linha.appendChild(tdAcao);


    return linha;
}
// carrega a lista de usuários fazendo uma request para api
function loadUserData() {
    let data = getUser('http://localhost:5095/api/Users');
    let userData = JSON.parse(data);
    let tabela = document.getElementById('tabela-alunos');
    userData.forEach(element => {
        let linha = criarLinha(element);
        tabela.appendChild(linha)
    });
}
//função que deleta registro
function deleteData(id) {

    var deleteConfirm = prompt("Tem certeza que quer apagar o registro? digite 'SIM'");

    if ( deleteConfirm.toUpperCase() == "SIM") {
        delelteUser(`http://localhost:5095/api/Users/${id}`);
        setTimeout(() => {
            document.location.reload(true)
        }, 1000);
      alert("Registro Deletado");
    }
}
/* FIM USUÁRIOS */


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
    tdNome = document.createElement('td');
    tdQuantidade = document.createElement('td');

    tdId.innerHTML = produto.id;
    tdNome.innerHTML = produto.name;
    tdQuantidade.innerHTML = produto.quantidade;

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdQuantidade);


    return linha;
}
// carrega a lista de produtos fazendo uma request para api
function loadProductData() {
    let data = getProduct('http://localhost:5095/api/Product');
    let userData = JSON.parse(data);
    let tabela = document.getElementById('tabela-produtos');
    userData.forEach(element => {
        let linha = criarLinhaProduto(element);
        tabela.appendChild(linha)
    });
}
//função que deleta registro
function deleteProductData(id) {

    var deleteConfirm = prompt("Tem certeza que quer apagar o registro? digite 'SIM'");

    if ( deleteConfirm.toUpperCase() == "SIM") {
        delelteProduct(`http://localhost:5095/api/Product/${id}`);
        setTimeout(() => {
            document.location.reload(true)
        }, 1000);
      alert("Registro Deletado");
    }
}
/* FIM PRODUTOS */

/* MOVIMENTAÇÕES */
//carrega lista de movimentações com request http para api
function getMovement(url) {
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}
function delelteMovement(url) {
    let request = new XMLHttpRequest()
    request.open("DELETE",url,false)
    request.send()
}
//criar linhas da tabela com dados dos movimentações
function criarLinhaMovement (movimentacao) {

    linha = document.createElement('tr');
    tdId = document.createElement('td');
    tdTipo = document.createElement('td');
    tdQuantidade = document.createElement('td');
    tdData = document.createElement('td');
    tdProduto = document.createElement('td');
    tdCriador = document.createElement('td');

    tdId.innerHTML = movimentacao.id;
    tdTipo.innerHTML = movimentacao.tipo;
    tdQuantidade.innerHTML = movimentacao.quantidade;
    tdData.innerHTML = movimentacao.criadoEm;
    tdProduto.innerHTML = movimentacao.productname;
    tdCriador.innerHTML = movimentacao.userName;

    linha.appendChild(tdId);
    linha.appendChild(tdTipo);
    linha.appendChild(tdQuantidade);
    linha.appendChild(tdData);
    linha.appendChild(tdProduto);
    linha.appendChild(tdCriador);

    return linha;
}
//prenche o options com dados do banco
function optionsUserId()
{
 //DA UM GET NO ENDPOINT DE LISTAR USUARIOS
 fetch('http://localhost:5095/api/Users')
 .then(response => response.json())
 .then((usuarios) =>
 {
 //PEGA OPTION VAZIA NO HTML
 let selUsuarios = document.getElementById('userId');

 //PREENCHE ELA COM O NOME E O ID DOS USUARIOS
 for(let usuario of usuarios)
    {
        let optUsuario = document.createElement('option');
        optUsuario.innerHTML = usuario.userName;
        optUsuario.value = usuario.id;
        selUsuarios.appendChild(optUsuario);
    }
    })
}
//prenche o options com dados do banco
function optionsProductId()
{
 //DA UM GET NO ENDPOINT DE LISTAR USUARIOS
 fetch('http://localhost:5095/api/Product')
 .then(response => response.json())
 .then((produtos) =>
 {
 //PEGA OPTION VAZIA NO HTML
 let selProdutos = document.getElementById('productId')

 //PREENCHE ELA COM O NOME E O ID DOS USUARIOS
 for(let produto of produtos)
 {
 let optProduto = document.createElement('option')
 optProduto.innerHTML = produto.name
 optProduto.value = produto.id
 selProdutos.appendChild(optProduto)
 }
 })
}
// carrega a lista de movimentações fazendo uma request para api
function loadMovementData() {
    let data = getMovement('http://localhost:5095/api/Movimentacao');
    let userData = JSON.parse(data);
    let tabela = document.getElementById('tabela-movimentacoes');
    userData.forEach(element => {

        let dataP = getProduct(`http://localhost:5095/api/Product/${element.productId}`);
        let productData = JSON.parse(dataP);
        let user = getProduct(`http://localhost:5095/api/Users/${element.userId}`);
        let userDataM = JSON.parse(user);
        element.productname = productData.name;
        element.userName = userDataM.userName;

        let linha = criarLinhaMovement(element);
        tabela.appendChild(linha)
    });
}
//função que deleta registro
function deleteMovementData(id) {

    var deleteConfirm = prompt("Tem certeza que quer apagar o registro? digite 'SIM'");

    if ( deleteConfirm.toUpperCase() == "SIM") {
        delelteMovement(`http://localhost:5095/api/Movimentacao/${id}`);
        setTimeout(() => {
            document.location.reload(true)
        }, 1000);
      alert("Registro Deletado");
    }
}
/* FIM PRODUTOS */
optionsProductId();
optionsUserId();
loadMovementData();
loadProductData();
loadUserData();