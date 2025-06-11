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
                console.log(`ID: ${item.id}\nName: ${item.name}\nPrice: ${item.price}\nQuantity: ${item.quantity}\nCatagory: ${item.catagory}\n"------------------------"`);
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
        console.log(`${name} maxsulot qo'shildi`);
    } catch (error) {
        console.log('Error on fetching users', error);
    }
}
async function updateProduct(id, obj) {
    try {
        const res = await fetch(`${url}/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        console.log(`ID:${id}  maxsulot o'zgartirildi`);
    } catch (error) {
        console.log('Error on fetching users', error);
    }
}
async function removeProduct(id) {
    try {
        await fetch(`${url}/${id}`, {
            method: "DELETE",
        });
        console.log(`ID:${id}  maxsulot o'chirildi!`);
    } catch (error) {
        console.log('Error on fetching users', error);
    }
}

async function search(string) {
    try {
        const res = await fetch(url).then(res => res.json());
        for (let item of res) {
            if (item.name.includes(string)) {
                console.log(item);
            }
        }
    } catch (error) {
        console.log('Error on fetching users', error);
    }
}

async function sortByCatagory() {
    try {
        const res = await fetch(url).then(res => res.json())
        const sorted = [...res].sort((a, b) => b.catagory.localeCompare(a.catagory));
        console.log("Sortlandi\n",sorted);
    } catch (error) {
        console.log('Error on fetching users', error);
    }
}
async function sortByPrice() {
    try {
        const res = await fetch(url).then(res => res.json())
        const sorted = [...res].sort((a, b) => a.price-b.price);
        console.log("Sortlandi\n", sorted);
    } catch (error) {
        console.log('Error on fetching users', error);
    }
}

async function getProductsByPrices(start, stop) {
    try {
        const res = await fetch(url).then(res => res.json())
        for (let item of res) {
            if (start <= item.price && stop >= item.price) {
                console.log(item);
            }
        }
    } catch (error) {
        console.log('Error on fetching users', error);
    }
}

async function getAllResult() {
    // await addProduct("Iphone 13 Pro Max", 500, 20, "phone");
    // await addProduct("Samsung Galaxy S22", 450, 18, "phone");
    // await addProduct("MacBook Air M2", 1000, 24, "computer");
    // await addProduct("Asus ROG Strix", 1200, 24, "computer");
    // await addProduct("LG Smart TV 55", 700, 18, "tv");
    // await addProduct("Samsung QLED 65''", 1100, 24, "tv")

    // await getProducts();
    // await getProductById(3);
    // await updateProduct(3, { name: "Samsung 24 Ultra" });
    // await removeProduct(1);
    // await search('Sam');
    // await sortByCatagory()
    // await sortByPrice()
    await getProductsByPrices(200,800)
}

getAllResult()