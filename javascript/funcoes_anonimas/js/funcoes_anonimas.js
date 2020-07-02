var exibirSaudação = function(){
    document.write("Olá " + nome + ", tudo bem?")
}
nome = prompt("Nome")
exibirSaudação(nome)

/*
* Uma função anonima é salva como valor de uma variavel e não possui nome. Essa ação é denominada técnica de wrapper.
*  Muito usado em funções de callback.
* */