function executarNoConsole(fn, num1, num2) {
    if(typeof fn === "function") {
        console.log(fn(num1, num2))
    }
}

function somar(a, b) {
    return a + b
}

executarNoConsole(somar, 22, 33)
executarNoConsole(2, 3, somar)