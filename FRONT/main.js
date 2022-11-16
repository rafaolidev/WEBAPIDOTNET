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

    tdNome.innerHTML = usuario.id;
    tdNome.innerHTML = usuario.userName;
    tdEmail.innerHTML = usuario.email;
    tdAcao.innerHTML = `<a class="editar"><button onclick="deleteData(${usuario.id})" class="ver-button">Excluir</button></a>`;

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


/* Produtos */
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


loadProductData();
loadUserData();