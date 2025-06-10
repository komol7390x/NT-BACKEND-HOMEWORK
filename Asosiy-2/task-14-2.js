const database = [
    { name: "Telefon", price: 500 },
    { name: "Noutbuk", price: 600 },
    { name: 'Mishka ',   price: 50 },
    { name: "Kalonka", price: 20 },
    { name: "Monitor", price: 900 },
    { name: "Klavitura", price: 150 },
];
function printProducts() {
    let i = 1
    for (let item of database) {
        console.log(`${i}. Nomi: ${item.name}\tNarxi: ${item.price}`);
        i++
    }
    console.log('-------------------------------------');
}
function getProducts() {
    let i=1
    for (let item of database) {
        console.log(`${i}. Nomi: ${item.name}\tNarxi: ${item.price}`);
        i++
    }
    console.log('-------------------------------------');
}
function sortProductsByPrice() {
    const sort = database.sort((a, b) => a.price - b.price)
    return sort
}
printProducts();
console.log('Maxsulot sortlanmoqda...\n');
setTimeout(() => {
    sortProductsByPrice()
},1500)
setTimeout(() => {
    getProducts()
    console.log('Maxsulot sortlandi!\n');
}, 2000)

