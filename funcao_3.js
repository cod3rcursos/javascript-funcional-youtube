const a = 3
let multiplicar = function (a, b) {
    return a * b
}

const operacoes = [
    function (a, b) {
        return a + b
    },
    function (a, b) {
        return a - b
    },
    function (a, b) {
        return a * b
    },
    function (a, b) {
        return a / b
    }
]


console.log(multiplicar(5, 6))

const subtracao = operacoes[1]

console.log(operacoes[0](5, 6))
console.log(subtracao(5, 6))
console.log(operacoes[2](5, 6))
console.log(operacoes[3](5, 6))