function calcularAreaTerrno(largura, comprimento) {

    return largura * comprimento
}


var largura = parseFloat(prompt("Entre com a largura do terreno"))
var comprimento = parseFloat(prompt("Entre com o comprimento do terreno"))

var area = calcularAreaTerrno(largura,comprimento)

document.write("Area total do terreno:" + area, "<br>")