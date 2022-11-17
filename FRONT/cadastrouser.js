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
function cadastraUser() {
    event.preventDefault()
    let url = "http://localhost:5095/api/Users"
    let nome = document.getElementById("userName").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value


    body = {

        "userName": nome,
        "email": email,
        "senha": senha

    }

    fazPost(url, body)
}
function UpdateUser() {
    event.preventDefault()

    let nome = document.getElementById("userName-update").value
    let email = document.getElementById("email-update").value
    let userId = document.getElementById("userId-UPDATE").value

    let url = `http://localhost:5095/api/Users/${userId}`


    body = {

        "userName": nome,
        "email": email

    }

    fazPut(url, body)
}
