var data = new Date()
var aniversatio = new Date(2000,3,14)

document.write(data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear(),"<br>")

document.write(data.toString(),"<br>")
//Subtrair dia
data.setDate(data.getDate() - 7385)

document.write(data.toString(),"<br>")
//Subtrair mes
data.setMonth(data.getMonth() - 7)

document.write(data.toString(),"<br>")
//Subtrair ano
data.setFullYear(data.getFullYear() - 7)

document.write(data.toString(),"<br>")
//Subtrair operaççção entre datas
data = new Date()//resetando data para hoje

document.write("Data resetada","<br>")

document.write("Dias entre nascimento e hoje:","<br>")
document.write((Math.ceil(Math.abs(aniversatio.getTime() - data.getTime())/(86400000))))



