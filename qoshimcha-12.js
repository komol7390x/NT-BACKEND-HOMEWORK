class Library{
    #book = new Map()
    addBook(name, descriptor, author, year, genre) {
        res = new Book(name, descriptor, author, year, genre)
        this.#book.set(this.#book.size+1,res)
    }
    showBook() {
        for (let [key, val] of this.#book.entries()) {
            console.log(`ID: ${key} \nNomi: ${val.name} \nYozuvchi: ${val.author}\nHaqida: ${val.descriptor}\nJanr: ${val.genre}\nYili: ${val.year}\n-----------------------`);
        }
    }
    showBookId(id) {
        for (let [key, val] of this.#book.entries()) {
            if (key == id) {
                console.log(`ID: ${key} \nNomi: ${val.name} \nYozuvchi: ${val.author}\nHaqida: ${val.descriptor}\nJanr: ${val.genre}\nYili: ${val.year}\n`);
            }
        }
    }
    update(id,genre) {
        for (let [key, val] of this.#book.entries()) {
            if (key == id) {
                val.genre = genre;
                console.log("Taxrirlandi\n");
                console.log(`ID: ${key} \nNomi: ${val.name} \nYozuvchi: ${val.author}\nHaqida: ${val.descriptor}\nJanr: ${val.genre}\nYili: ${val.year}\n`);
            }
        }
    }
    delete(name) {
        for (let [key, val] of this.#book.entries()) {
            if (val.name==name) {
                this.#book.delete(key)
                console.log(`ID: ${key} \nNomi: ${val.name} \nO'chirildi\n`);
            }
        }
    }
    searchBook(name) {
        for (let [key, val] of this.#book.entries()) { 
            if (val.name.includes(name)) {
                console.log(`ID: ${key} \nNomi: ${val.name} \nYozuvchi: ${val.author}\nHaqida: ${val.descriptor}\nJanr: ${val.genre}\nYili: ${val.year}\n`);
            }
        }
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
lib.addBook("Ko'hna dunyo", "Tarix haqiqat insoniyat", "Erkin A'zam", 2005, "Tarixiy hikoya");
// lib.showBook();
// lib.showBookId(2);
// lib.update(2,"Roman");
// lib.delete("Ufq");
// lib.showBook();
lib.searchBook("d");
