let url = 'https://684967eb45f4c0f5ee714471.mockapi.io/products/komol7390x/product'

function print(object) {
    console.log(`ID: ${object.id}\nName: ${object.name}\nPrice: ${object.price}\nQuantity: ${object.quantity}\nCatagory: ${object.catagory}\n------------------------`);
}
async function postDelete(oldUrl,newUrl) {
    for (let item of oldUrl) {
        await removeProduct(item.id)
    }
    for (let item of newUrl) {
        await addProduct(item.name,item.price,item.quantity,item.catagory)
    }
}

async function getProducts() {
    try {
        const res = await fetch(url).then(res => res.json())
        for (let item of res) {
            print(item)
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
                print(item)
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
        console.log(`ID:${id}  maxsulot o'zgartirildi\n`);
        getProductById(id)
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
        await postDelete(res,sorted)
        console.log("\nSortlandi\n",sorted);
    } catch (error) {
        console.log('Error on fetching users', error);
    }
}
async function sortByPrice() {
    try {
        const res1 = await fetch(url).then(res => res.json())
        const sorted1 = [...res1].sort((a, b) => a.price-b.price);
        await postDelete(res1,sorted1)
        console.log("\nSortlandi\n", sorted1);
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
    // await getProductsByPrices(200,800)
}

getAllResult()