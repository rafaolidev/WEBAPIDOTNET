function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
    request.onload = function() {
        console.log(this.responseText)
    }
    setTimeout(() => {
        document.location.reload(true)
    }, 2000);

    return request.responseText

}

function fazPut(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("PUT", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
    request.onload = function() {
        console.log(this.responseText)
    }
    setTimeout(() => {
        document.location.reload(true)
    }, 2000);
    return request.responseText

}

//pega os dados do form para chamar a função de cadastro
function cadastraProduto() {
    event.preventDefault()
    let url = "http://localhost:5095/api/Product"
    let name = document.getElementById("name").value
    let quantidade = document.getElementById("quantidade").value


    body = {

        "name": name,
        "quantidade": quantidade,

    }

    fazPost(url, body)
}
function UpdateProduct() {
    event.preventDefault()
    let productId = document.getElementById("productId-UPDATE").value;
    let quantidade = document.getElementById("quantidade-update").value;

    let url = `http://localhost:5095/api/Product/${productId}`


    body = {

        "quantidade": quantidade

    }

    fazPut(url, body)
}