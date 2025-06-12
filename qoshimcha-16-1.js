class Products {
    authorUrl = 'https://684967eb45f4c0f5ee714471.mockapi.io/products/komol7390x/loginPass';
    bookUrl = 'https://684967eb45f4c0f5ee714471.mockapi.io/products/komol7390x/book';
    shifr = {
        a: 'cZf', b: 'Xkq', c: 'pDh', d: 'LmY', e: 'qJo', f: 'BaE', g: 'zWn', h: 'nVg', i: 'JtR',
        j: 'yAx', k: 'fLi', l: 'Ryb', m: 'MkU', n: 'oQz', o: 'tCv', p: 'HsA', q: 'dIe', r: 'KvM',
        s: 'xPu', t: 'UgT', u: 'AwR', v: 'qNb', w: 'SeX', x: 'WjK', y: 'bLq', z: 'Nyo',
        0: 'eTR', 1: 'Wkz', 2: 'fAb', 3: 'QyJ', 4: 'uXm', 5: 'Bpo', 6: 'nKs', 7: 'ZqL', 8: 'Ghv', 9: 'YcD'
        //   console.log(shifr);
    };
    constructor(username, password) {
        this.newPass
        this.username = username;
        this.password = password;
    }
    async printUserId(id) {
        try {
            const url = await fetch(this.authorUrl).then(res => res.json())
            for (let item of url) {
                if (item.id == id) {
                    this.printUser(item);
                }
            }
        } catch (error) {
            console.log('Error ' + error.message);
        }
    }
    async printUser(item) {  //1-ta obj console chiqarish
        console.log(`ID:${item.id}\nUsername: ${item.username}\nPassword: ${item.password}\nProducts ID: [${item.product}]\n---------------------------------`);
    }
    async authorPrint() {  // Hammasini console chiqarish
        try {
            const url = await fetch(this.authorUrl).then(res => res.json())
            for (let item of url) {
                this.printUser(item)
            }
        } catch (error) {
            console.log('Error ' + error.message);
        }
    }
    async addProduct(login, pass) { //  username va pass qo'shish
        try {
            const check = await this.checkUsername(login)
            if (check) {
                this.newPass = await this.enCode(pass);
                await fetch(this.authorUrl, {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({
                        username: login,
                        password: this.newPass,
                        product: []
                    })
                })
                console.log(`${login} username qo'shildi`);
            } else {
                console.log(`${login} bunday username bor!`);
                return
            }
        } catch (error) {
            console.log('Error ' + error.message);
        }
    }
    async addProductId(id2, idNumber) { //Product Id qoshish
        try {
            if (typeof idNumber != 'number') {
                console.log('Kiritilgan id son bolish kerak');
                return
            }
            const res = await fetch(this.authorUrl).then(res => res.json())
            let new1 = [];
            await this.printUserId(id2)
            for (let item of res) {
                if (item.id == id2) {
                    if (!item.product.includes(idNumber)) {
                        new1 = item.product
                        new1.push(idNumber)
                    } else {
                        console.log(`Product id: ${idNumber} alaqachon bunday id bor!`);
                        return
                    }
                }
            }
            await this.printUserId(id2)
            if (new1.length != 0) {
                await fetch(`${this.authorUrl}/${id2}`, {
                    method: "PUT",
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({ product: new1 })
                })
                console.log(`ID:${id2} ma'lumotlar qo'shildi\n`)
            } else {
                console.log(`ID:${id2} foydalanuvchi yo'q\n`)
            }
        } catch (error) {
            console.log('Error ' + error.message);
        }
    }
    async getProductsID(id) {  //id boyicha book store korsatvoti
        try {
            let url = await fetch('https://684967eb45f4c0f5ee714471.mockapi.io/products/komol7390x/book').then(res => res.json())
            for (let item of url) {
                if (item.id == id)
                    console.log(`ID:${item.id}\nTitle:${item.title}\nDescription:${item.description}\nJanr:${item.genre}\n----------------------------`);
            }
        } catch (error) {
            console.log('Error ' + error.message);
        }
    }
    async getProducts(id) { //id boyicha topib getProductsID() id bervoti
        try {
            const url = await fetch(this.authorUrl).then(res => res.json())
            for (let item of url) {
                if (item.id == id) {
                    for (let keyId of item.product) {
                        this.getProductsID(keyId)
                    }
                }
            }
        } catch (error) {
            console.log('Error ' + error.message);
        }
    }
    async enCode(pass) {  // Shifrlash
        try {
            pass = pass.toString().toLowerCase()
            let str = [];
            for (let item of pass) {
                const test = await this.isAlphaNumeric(item)
                if (test) {
                    str.push(this.shifr[item])
                } else {
                    str.push("-")
                }
            }
            str = str.join(" ")
            return str
        } catch (error) {
            console.log('Error ' + error.message);
        }
    }
    async deCode(id, oldPass) { //deshifrlanvoti
        try {
            const res = await fetch(this.authorUrl).then(res => res.json())
            let oldPass1 = "";
            for (let item of res) {
                if (item.id == id) {
                    oldPass1 = item.password
                }
            }
            const resPass = await this.enCode(oldPass);
            if (resPass == oldPass1) {
                console.log(`ID:${id}-parol o'xshash`);
                return
            } else {
                console.log(`ID:${id}-parol notog'ri`);
                return
            }
        } catch (error) {
            console.log('Error ' + error.message);
        }
    }
    async checkUsername(login1) { // Username tekshirish
        try {
            const res = await fetch(this.authorUrl).then(res => res.json())
            for (let item of res) {
                if (item.username == login1) {
                    return false
                }
            }
            return true
        } catch (error) {
            console.log('Error ' + error.message);
        }

    }
    async updatePassword(id, pass) {
        try {
            const newPass = await this.enCode(pass)
            await fetch(`${this.authorUrl}/${id}`, {
                method: "PUT",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ password: newPass })
            })
            await this.printUserId(id)
            console.log('Parol yengilandi');
        } catch (error) {
            console.log('Error ' + error.message);
        }
    }
    async isAlphaNumeric(str) {
        return "qwertyuiopasdfghjklzxcvbnm1234567890".includes(str)
    }
}

class Book {
    bookUrl = 'https://684967eb45f4c0f5ee714471.mockapi.io/products/komol7390x/book';
    constructor(title, description, genre) {
        this.title = title;
        this.description = description;
        this.genre = genre
    }
    async printBookId(id) {
        const res = await fetch(this.bookUrl).then(res => res.json());
        for (let item of res) {
            if (item.id == id) {
                this.printBook(item)
            }
        }
        return true
    }
    async printBookTitle(title) {
        const res = await fetch(this.bookUrl).then(res => res.json());
        for (let item of res) {
            if (item.title == title) {
                this.printBook(item)
            }
        }
        return true
    }
    async checkTitle(title) {
        const res = await fetch(this.bookUrl).then(res => res.json());
        for (let item of res) {
            if (item.title == title) {
                return false
            }
        }
        return true
    }
    async checkId(id) {
        const res = await fetch(this.bookUrl).then(res => res.json());
        for (let item of res) {
            if (item.id == id) {
                return false
            }
        }
        return true
    }
    async createBook(title, description, genre) {
        const checkBook = await this.checkTitle(title)

        if (checkBook) {
            await fetch(this.bookUrl, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    title,
                    description,
                    genre
                })
            })
            console.log(`${title} jitob qoshildi`);
            return
        }
        else {
            console.log(`${title} bunday kitob alaqachon bor`);
            return
        }
    }
    printBook(item) {
        console.log(`Id:${item.id}\nNomi:${item.title}\nMazmuni: ${item.description}\nJanri:${item.genre}\n-----------------------`);
    }
    async readAllBook() {
        const res = await fetch(this.bookUrl).then(res => res.json());
        for (let item of res) {
            this.printBook(item)
        }
    }
    async updateTitle(id, title2) {
        const check = await this.checkTitle(title2);
        if (check) {
            await fetch(`${this.bookUrl}/${id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    title: title2
                })
            })
            this.printBookId(id)
            console.log(`${title2} yangilandi\n`);
        } else {
            console.log(`${title2} bunday kitob alaqachor bor`);
            this.printBookTitle(title2);
            return
        }
    }
    async delete(id) {
        const check = await this.checkId(id)
        if (!check) {
            await fetch(`${this.bookUrl}/${id}`,
                { method: "DELETE" }
            )
            console.log(`ID: ${id} o'chirildi!`);
        } else {
            console.log(`${id} bunday id topilmmadi`);
        }
    }
}

const product = new Products();
// product.addProduct("Komol7390", "7390x!@");
// product.addProduct("Jamshid20001", "qwerty!@#");
// product.addProduct("Saloh2020", "zxcv123!@");
// product.addProduct("Begzod2023", "enter123!@");
// product.addProduct("Dilshod2025", "exit123!@");
// product.updatePassword(2, "abcdw!@")
// product.addProductId(5, 2)
// product.deCode(5, "exit123!@")
// product.deCode(5, "exit123!@1")
// product.getProducts(2)

// product.authorPrint();

const book = new Book()
// book.createBook('Harry Potter 5', 'Magic', 'Fantasiy')
// book.updateTitle(17, "Harry Potter 8");
// book.delete(17)
// book.readAllBook()


