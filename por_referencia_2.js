const o1 = Object.freeze({ name: 'a', age: 13 })

// evoluindo o dado
const o2 = Object.freeze({ ...o1, name: 'b' })

console.log(o1.name, o2.name)


o1.name ='x'
o2.name ='x'
console.log(o1.name, o2.name)