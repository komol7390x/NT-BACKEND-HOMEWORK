class Library{
    #book=new Map()
    addBook() {
        
    }
    showBook() {
        
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
let res = new Book("O'tgan kunlar", "Muxabbat haqida", "Abdulla Qodiry", 1920, "drama");
console.log(res);
