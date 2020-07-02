var nome = prompt('Nome')
var nota1 = parseInt(prompt('Nota 1'))
var nota2 = parseFloat(prompt('Nota 2'))

document.write("<h1>Olá " + nome + " ,tudo bem? Suas notas: <br>")
document.write("Nota 1:" + nota1, "<br>")
document.write("Nota 2:" + nota2, "<br>")
document.write("Nota Média:" + (nota1+nota2)/2, "<br>")

nota1 = nota1.toString()
nota2 = nota2.toString()

document.writeln("isso em string fica" + nota1 +nota2)


