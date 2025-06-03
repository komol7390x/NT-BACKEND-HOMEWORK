class Library{
    #book = new Map()
    addBook(name, descriptor, author, year, genre) {
        res = new Book(name, descriptor, author, year, genre)
        this.#book.set(this.#book.size+1,res)
    }
    showBook() {
        console.log(this.#book);
    }
    showBookId() {
        
    }
    update() {
        
    }
    delete() {
        
    }
}
class Book{
    constructor(name, descriptor, author, year, genre) {
        this.name = name,
        this.descriptor = descriptor,
        this.author=author,
        this.year=year
        this.genre = genre
    }
}
let res = new Book();
let lib = new Library();
lib.addBook("O'tkan kunlar", "Eski davr muhabbat fojia", "Abdulla Qodiriy", 1926, "Tarixiy roman")
lib.addBook("Mehrobdan chayon", "Xiyonat sevgi ayb", "Pirimqul Qodirov", 1972, "Dramatik roman");
lib.addBook("Ufq", "Qishloq hayoti islohotlar", "Said Ahmad", 1980, "Ijtimoiy roman");
lib.addBook("Ko'hna dunyo", "Tarix haqiqat insoniyat", "Erkin A'zam", 2005, "Tarixiy esse");
// lib.showBook()
