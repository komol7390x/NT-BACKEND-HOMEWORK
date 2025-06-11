let url = 'https://684967eb45f4c0f5ee714471.mockapi.io/products/komol7390x/product'

async function getProducts() {
    try {
        const res = await fetch(url).then(res => res.json())
        for (let i = 1; i <= res.length; i++) {
            getProductById(i);
        }
    } catch (error) {
        console.log('Error on fetching users', error);
    }
}

async function getProductById(id) {
    try {
        const res = await fetch(url).then(res => res.json())
        for (let item of res) {
            if (item.id == id) {
                console.log(`ID: ${item.id}\nName: ${item.name}\nPrice: ${item.price}\nQuantity: ${item.quantity}\nCatagory: ${item.catagory}`);
                console.log("------------------------");
            }
        }
    } catch (error) {
        console.log('Error on fetching users', error);
    }
}

async function addProduct(name, price, quantity, catagory) {
    try {
        const newObj = {
            name,
            price,
            quantity,
            catagory

        }
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newObj)
        })
    } catch (error) {
        console.log('Error on fetching users', error);
    }
}
async function updateProduct(obj) {

}

async function removeProduct(id) {

}

async function search(string) {

}

async function sortByCatagory() {

}

async function sortByPrice() {

}

async function getProductsByPrices(start, stop) {

}
// await getProducts()
// await getProductById(3)
// await addProduct("Iphone 13 Pro Max", 500, 20, "phone")