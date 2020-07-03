var texto = 'Matheus Henrique Julidori'

//length
document.write(texto,"<br>")
document.write(texto.length,"<br>")
document.write(texto.charAt(5),"<br>")
document.write(texto.indexOf('k'),"<br>")//-1 significa que o caractere n existe
document.write(texto.replace('Julidori', 'Braga'),"<br>")//Procura julidori e troca por braga
document.write(texto.substr(8,8),"<br>")//Inicia na posição 8, e recupera 8 carecteres depois dela
document.write(texto.toLowerCase(),"<br>")
document.write(texto.toUpperCase(),"<br>")
document.write(texto.trim(),"<br>")//Remove caracteres no começo e no fim da string
