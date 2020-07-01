var a = 10
var b = 20
var c = null


document.writeln("<br> <h1>Valores normais</h1>")

document.writeln('A:'+a+"<br>")
document.writeln('B:'+b+"<br>")
document.writeln('C:'+c+"<br>")

var c = a
var a = b
var b = c

document.writeln("<hr><br> <h1>Valores invertidos</h1>")

document.writeln('A:'+a+"<br>")
document.writeln('B:'+b+"<br>")
document.writeln('C:'+c+"<br>")