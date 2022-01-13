//Class - ES6

class User {

    constructor (name, surname, books=[], pets=[]){
    this.name = name,
    this.surname = surname,
    this.books = books,
    this.pets = pets
    }
    // Returns full name
    getFullName() {
        return(`${this.name} ${this.surname}`)
        };
    // Adds pet
    addPet(newPet) {
        this.pets = [...this.pets, newPet]
        };
    // Returns pets
    countPets(){
        return this.pets.length
        };
    // Add a book
    addBook(newTitle, newAuthor)  {
        this.books = [...this.books, {title: newTitle, author: newAuthor}]
        };
    // Returns book titles
    getBookNames(){
        return this.books.map(book => book.title)
        }
}

var books = [
    {title: 'The Odissey', author:'Homer'},
    {title: 'Les miserables', author:'Victor Hugo'},
    {title: 'Ulises', author: 'James Joyce'}
]
var pets = ['Dog', 'Cat', 'Rabbit']

var newUser1 = new User('Clark', 'Kent', books, pets)

//Validations

console.log(newUser1.getFullName())

newUser1.addPet("Ornitorrinco")
console.log(newUser1.pets);

console.log(`${newUser1.getFullName()} tiene ${newUser1.countPets()} mascotas`);

newUser1.addBook("Dracula","Bram Stoker")
console.log(newUser1.books);

console.log(newUser1.getBookNames());
