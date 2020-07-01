
var teste = '7'
var numeroInt = 7

if(teste == numeroInt){
    document.writeln("São valores iguais, mas um é int e outro string, usar = = = em vez de = = para verificar se são do mesmo tipo <br><br>")
}

var nome = prompt('nome')
var idade = prompt('idade')

if(nome!==''){
    document.writeln("Seu nome é" + nome ,"<br>")
}else{
    document.writeln("Hum, anonimo")
}