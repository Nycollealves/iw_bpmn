function login(){
    let login = document.querySelector("#login").value
    let nome = document.querySelector("#nome").value
    let mail = document.querySelector("#email").value 
    let pass = document.querySelector("#password").value 


    const dados = [
                    {login:login, nome:nome, email:mail, password:pass}
                  ]


    console.log("Seus dados:" + dados)

    alert("Seu login é:" + dados[0].login + "\n" +
          "Seu nome é:" + dados[0].nome +   "\n" +
          "Seu email é:" + dados[0].email +  "\n" +
          "Sua senha é:" + dados.password
         )

    const json = JSON.stringify (dados)

    sessionStorage.setItem("registro", json)
}