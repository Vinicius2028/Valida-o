const dataatual = new Date();

const DataAtual = dataatual.toLocaleString('pt-br')

/**Pegar a Nome Do Usuario*/
const usuario = sessionStorage.getItem("Logado")

/**Função De Copiar Texto**/

function Copy1(){
    let frase = "1º Contato - " + " " + DataAtual + " " + usuario + " " + "- Desbloqueio"
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

function Copy2(){
    let frase = "2º Contato -  " + " " + DataAtual + " " + usuario + " " + "- Desbloqueio"
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

function Copy3(){
    let frase = "3º Contato - " + " " + DataAtual + " " + usuario + " " + "- Desbloqueio"
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

function Copy4(){
    let frase = "4º Contato - " + " " + DataAtual + " " + usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

function Copy5(){
    let frase = "5º Contato - " + " " + DataAtual + " " + usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}


/*Frases Primeira Coluna**/

function Copy6(){
    let frase = "Ligação efetuada, acompanhamento de assinatura - " + " " + DataAtual + " " + usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

function Copy7(){
    let frase = "Horário marcado para acompanhamento de assinatura - " + " " + DataAtual + " " + usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

function Copy8(){
    let frase = "Link da selfie gerado e enviado - " + " " + DataAtual + " " + usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

function Copy9(){
    let frase = "Não foi possível gerar o link da SELFIE, devido à instabilidade. Será gerado assim que possível. - " + " " + DataAtual + " " + usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

function Copy10(){
    let frase = "Nova tentativa  -" + " " + DataAtual + " " +  usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

/*Frases Segunda Coluna**/

function Copy11(){
    let frase = "Nova tentativa, sem retorno  - " + " " + DataAtual + " " +  usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

function Copy12(){
    let frase = "Sem nenhum tipo de retorno do cliente - " + " " + DataAtual + " " +  usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

function Copy13(){
    let frase = "Bloqueado pelo cliente  - " + " " + DataAtual + " " +  usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

function Copy14(){
    let frase = "Número não localizado, verificar e corrigir. -" + " " + DataAtual + " " + usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

function Copy15(){
    let frase = "Ligação em andamento -" + " " + DataAtual + " " +  usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

/*Frases Terceira Coluna**/

function Copy16(){
    let frase = "Sem retorno do cliente, cliente não responde a validação -" + " " + DataAtual + " " +  usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

function Copy17(){
    let frase = "Cliente c/ dúvidas sobre o produto, analista entrar em contato e sanar -" + " " + DataAtual + " " +  usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

function Copy18(){
    let frase = "Cliente solicitou o cancelamento, analista entrar em contato e reter a venda, ou cancelar -" + " " + DataAtual + " " +  usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

function Copy19(){
    let frase = "Cliente não realiza as orientações do time de FORM, instruir o cliente para nos responder corretamente -" + " " + DataAtual + " " +  usuario 
    navigator.clipboard.writeText(frase)
    window.location.reload()
}

/**Ver Se fez Login**/

if(usuario === null){
    window.location.href = "../Login/Login.html";
}

