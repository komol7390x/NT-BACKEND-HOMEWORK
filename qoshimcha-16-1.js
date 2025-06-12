class Products {
    authorUrl = 'https://684967eb45f4c0f5ee714471.mockapi.io/products/komol7390x/LoginPassword';
    productUrl = 'https://684967eb45f4c0f5ee714471.mockapi.io/products/komol7390x/product';

    shifr = {
        a: 'cZf', b: 'Xkq', c: 'pDh', d: 'LmY', e: 'qJo', f: 'BaE', g: 'zWn', h: 'nVg', i: 'JtR',
        j: 'yAx', k: 'fLi', l: 'Ryb', m: 'MkU', n: 'oQz', o: 'tCv', p: 'HsA', q: 'dIe', r: 'KvM',
        s: 'xPu', t: 'UgT', u: 'AwR', v: 'qNb', w: 'SeX', x: 'WjK', y: 'bLq', z: 'Nyo',
        0: 'eTR', 1: 'Wkz', 2: 'fAb', 3: 'QyJ', 4: 'uXm', 5: 'Bpo', 6: 'nKs', 7: 'ZqL', 8: 'Ghv', 9: 'YcD'
        //   console.log(shifr);
    };
    constructor() {
        this.newPass
    }
    async authorPrint() {
        const url = await fetch(this.authorUrl).then(res => res.json())
        console.log(url);
    }
    async addProduct(login, pass) {
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
    async addProductId() {
        // ------------
    }
    async getProducts() {
        // -------------
    }
    async enCode(pass) {
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
    static async deCode(oldPass, newPass) {
        // -------------
    }
    async checkUsername(login1) {
        const res = await fetch(this.authorUrl).then(res => res.json())
        for (let item of res) {
            if (item.username == login1) {
                return false
            }
        }
        return true
    }

    async isAlphaNumeric(str) {
        return /^[a-z0-9]+$/.test(str);
    }

}

const product = new Products()
// await product.addProduct("11Komol111", "7390x_#")
// await product.authorPrint()