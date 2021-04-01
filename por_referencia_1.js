let o1 = { name: 'a'}
let o2 = o1

function alterar(obj) {
    obj.name = 'x'
}

o2.name = 'b'
console.log(o1.name, o2.name)

alterar(o2)
console.log(o1.name, o2.name)