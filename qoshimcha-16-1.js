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
        const url = await fetch(this.authorUrl).then(res => res.json())
        for (let item of url) {
            if (item.id == id) {
                this.printUser(item);
            }
        }
    }
    async printUser(item) {  //1-ta obj console chiqarish
        console.log(`ID:${item.id}\nUsername: ${item.username}\nPassword: ${item.password}\nProducts ID: [${item.product}]\n---------------------------------`);
    }
    async authorPrint() {  // Hammasini console chiqarish
        const url = await fetch(this.authorUrl).then(res => res.json())
        for (let item of url) {
            this.printUser(item)
        }
    }
    async addProduct(login, pass) { //  username va pass qo'shish
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
    }
    async addProductId(id2, idNumber) { //Product Id qoshish
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
    }
    async getProductsID(id) {  //id boyicha book store korsatvoti
        let url = await fetch('https://684967eb45f4c0f5ee714471.mockapi.io/products/komol7390x/book').then(res => res.json())
        for (let item of url) {
            if (item.id == id)
                console.log(`ID:${item.id}\nTitle:${item.title}\nDescription:${item.description}\nJanr:${item.genre}\n----------------------------`);
        }
    }
    async getProducts(id) { //id boyicha topib getProductsID() id bervoti
        const url = await fetch(this.authorUrl).then(res => res.json())
        for (let item of url) {
            if (item.id == id) {
                for (let keyId of item.product) {
                    this.getProductsID(keyId)
                }
            }
        }
    }
    async enCode(pass) {  // Shifrlash
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
    }
    async deCode(id, oldPass) { //deshifrlanvoti
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
    }
    async checkUsername(login1) { // Username tekshirish
        const res = await fetch(this.authorUrl).then(res => res.json())
        for (let item of res) {
            if (item.username == login1) {
                return false
            }
        }
        return true
    }
    async updatePassword(id, pass) {
        const newPass = await this.enCode(pass)
        await fetch(`${this.authorUrl}/${id}`, {
            method: "PUT",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ password: newPass })
        })
        await this.printUserId(id)
        console.log('Parol yengilandi');
    }
    async isAlphaNumeric(str) {
        return "qwertyuiopasdfghjklzxcvbnm1234567890".includes(str)
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

// console.log(111);

