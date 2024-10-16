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
    }else if(usuario === "Lucas" && senha === "@ano208"){
        sessionStorage.setItem("Logado","Lucas")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "Lauhra" && senha === "@ano209"){
        sessionStorage.setItem("Logado","Lauhra")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "Luan" && senha === "@ano215"){
        sessionStorage.setItem("Logado","Luan")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "Jorge" && senha === "@ano221"){
        sessionStorage.setItem("Logado","Jorge")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "Julia Siviero" && senha === "@ano212"){
        sessionStorage.setItem("Logado","Jorge")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "Danielly" && senha === "@ano201"){
        sessionStorage.setItem("Logado","Danielly")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "Matheus" && senha === "@ano210"){
        sessionStorage.setItem("Logado","Matheus")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "Bia" && senha === "@ano200"){
        sessionStorage.setItem("Logado","Bia")
        window.location.href = "../Home/Home.html";
    }else if(usuario === "" || senha === ""){
        frase.innerHTML = "Favor Preencher Todos Os Campos!"
    }else{
        frase.innerHTML = "Usuário ou Senha Invalidos!"
    }
}
