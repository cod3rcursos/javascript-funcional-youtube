class Usuario {
    #nome
    #email

    constructor(nome, email) {
        this.#nome = nome
        this.#email = email
    }

    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    alterarNome(novoNome) {
        return new Usuario(novoNome, this.#email)
    }

    alterarEmail(novoEmail) {
        return new Usuario(this.#nome, novoEmail)
    }
}

let u1 = new Usuario('Ana', 'anaanaana@ana.com')
const u2 = u1

u1 = u1.alterarNome('Leo')
u1 = u1.alterarEmail('leoleoleo@leo.com')

u1.nome = 'Leo' // não vai funcionar (sem setter)
u2.email = 'leoleoleo@leo.com' // não vai funcionar (sem setter)

u1.alterarNome('Leo')

console.log(u1.nome)
console.log(u1.email)

console.log(u2.nome)
console.log(u2.email)