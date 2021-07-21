function precoComImposto(imposto, preco) {
    return preco * (1 + imposto)
}
// rj
console.log(precoComImposto(0.11, 56.78))
console.log(precoComImposto(0.11, 12.33))
console.log(precoComImposto(0.11, 34.00))
console.log(precoComImposto(0.11, 11.56))
console.log(precoComImposto(0.11, 22.45))


// currying
function precoComImposto2(imposto) {
    return function (preco) {
        return preco * (1 + imposto)
    }
}
// rj
const precoComImpostoDoRj = precoComImposto2(0.11)
const precoComImpostoDoSp = precoComImposto2(0.15)
const precoComImpostoDoCe = precoComImposto2(0.13)

console.log(precoComImpostoDoRj(56.78))
console.log(precoComImpostoDoSp(12.33))
console.log(precoComImpostoDoRj(34.00))
console.log(precoComImpostoDoCe(11.56))
console.log(precoComImpostoDoRj(22.45))