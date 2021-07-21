
function gritar(expr) {
    return expr.toUpperCase() + '!!!!'
}

const x = gritar('bom dia')
console.log(x)

function somar(a = 10, b = 10) {
    return a + b
}

const resultado1 = somar(3, 4, 5, 6, 7, 8, 9, 10)
console.log(resultado1)

const resultado2 = somar(3)
console.log(resultado2)

const resultado3 = somar()
console.log(resultado3)

