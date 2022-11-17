function optionsUserIdUpdate()
{
 //DA UM GET NO ENDPOINT DE LISTAR USUARIOS
 fetch('http://localhost:5095/api/Users')
 .then(response => response.json())
 .then((usuarios) =>
 {
 //PEGA OPTION VAZIA NO HTML
 let selUsuariosUpdate = document.getElementById('userId-UPDATE');

 //PREENCHE ELA COM O NOME E O ID DOS USUARIOS
 for(let usuario of usuarios)
    {
        let optUsuario = document.createElement('option');
        optUsuario.innerHTML = usuario.userName;
        optUsuario.value = usuario.id;
        selUsuariosUpdate.appendChild(optUsuario);
    }
    })
}
optionsUserIdUpdate();