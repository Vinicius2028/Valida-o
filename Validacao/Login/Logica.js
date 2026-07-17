/**Função Entrar**/
function Entrar(){
    /**Pegar os Valores do Campo**/
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value
    let frase = document.getElementById('frase')

    /**Validar usuario e senha**/
    if(usuario === "Vinicius" && senha === "@ano204"){
       sessionStorage.setItem("Logado","Vinicius")
       window.location.href = "../Home/Home.html";
    }else if(usuario === "Alex" && senha === "@ano207"){
        sessionStorage.setItem("Logado","Alex")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "nicolas" && senha === "@ano2026"){
        sessionStorage.setItem("Logado","Nicolas")
        window.location.href = "../Home/Home.html";
    else if(usuario === "bruna" && senha === "@ano2029"){
        sessionStorage.setItem("Logado","Bruna")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "" || senha === ""){
        frase.innerHTML = "Favor Preencher Todos Os Campos!"
    }else{
        frase.innerHTML = "Usuário ou Senha Invalidos!"
    }
}




