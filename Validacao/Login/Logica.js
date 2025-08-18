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
    }else if(usuario === "Raul" && senha === "@ano205"){
        sessionStorage.setItem("Logado","Raul")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "Geovana" && senha === "@ano206"){
        sessionStorage.setItem("Logado","Geovana")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "Alex" && senha === "@ano207"){
        sessionStorage.setItem("Logado","Alex")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "Taina" && senha === "@ano208"){
        sessionStorage.setItem("Logado","Taina")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "Julia" && senha === "@ano222"){
        sessionStorage.setItem("Logado","Julia")
        window.location.href = "../Home/Home.html"
    }else if(usuario === "Luan" && senha === "@ano215"){
        sessionStorage.setItem("Logado","Luan")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "Carlos" && senha === "@ano221"){
        sessionStorage.setItem("Logado","Carlos")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "Danielly" && senha === "@ano201"){
        sessionStorage.setItem("Logado","Danielly")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "" || senha === ""){
        frase.innerHTML = "Favor Preencher Todos Os Campos!"
    }else{
        frase.innerHTML = "Usuário ou Senha Invalidos!"
    }
}


