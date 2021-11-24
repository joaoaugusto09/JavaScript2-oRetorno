var valor = prompt('O valor do produto:')
var pagou = prompt('O quanto o seu cliente pagou:');

var calculo = parseInt(valor) - parseInt(pagou)

document.write('sobra = '+'R$'+(calculo))