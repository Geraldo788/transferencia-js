let minutos = parseFloat(prompt("Ingrese minutos"))
let horas = parseInt(minutos / 60)

let minuto = minutos - (horas * 60)
alert(`${horas} horas y ${minuto} minutos`)

