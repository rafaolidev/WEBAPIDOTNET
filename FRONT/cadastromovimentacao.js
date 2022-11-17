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

//pega os dados do form para chamar a função de cadastro
function cadastraMoviment() {
    event.preventDefault()
    let url = "http://localhost:5095/api/Movimentacao"
    let tipo = document.getElementById("tipo").value
    console.log(tipo)
    let productId = document.getElementById("productId").value
    let userId = document.getElementById("userId").value
    let quantidade = document.getElementById("quantidade-mov").value


    body = {

        "tipo": tipo,
        "productId": productId,
        "quantidade": quantidade,
        "userId": userId

    }

    fazPost(url, body)
}