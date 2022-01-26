const Container = require('./DesafioManejoArchivos');

Container.saveObject({
    title: "otra cosita",
    price: 300,
    thumbnail: "url.com",
})

console.log(Container.getAll())
console.log(Container.getById(2))
console.log(Container.deleteById(2))
// console.log(Container.deleteAll())

