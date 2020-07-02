/*Funções de callback são funções passadas como parametros para outras funções
* Serve basicamente pra chamar uma função quando acabar outra pra dar continuidade no processamento dos dados. Muito usado
* em processamentos assincronos.
*
* Ex: Ter uma função de processamento de um DataFrame. nessa função, no fim dela, verificar se uma coluna está vazia.
* Se estiver, chamar a função que faz um processamento pra remover essa coluna.
* Se nao tiver, chamar a função que analiza os dados daquela coluna e faz uma média dos valores
* */


function exibirArtigo(id, callbackSucesso,callbackError) {

    //logica: Recuperar artigo via requisição HTTP
    if( false ){//MUDAR PARA TRUE PARA VER O RESULTADO DO IF E NÂO DO ELSE
        callbackSucesso("Titulo","Conteudo do Artigo")
    }
    else{
        callbackError("Erro ao recuperar os dados")
    }

}

var callbackSucesso = function(title,description){
    document.write("<h1>" + title + "</h1>")
    document.write("<hr />")
    document.write("<p>" + description + "</p>")
}
var callbackErro = function(error){
    document.write(error)
}


exibirArtigo(1,callbackSucesso,callbackErro) //Não colcoar abre e fecha parentese, se não o interpretador JS acha
                                                // que tem que executar a função e passar o retornod dela como parametro
