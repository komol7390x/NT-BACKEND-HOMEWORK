const url = 'https://dummyjson.com/products'
class Product {
    constructor() {
        this.data =[]
    }
    async urlInfo() {
        try {
            const res = await fetch(url)
                .then(res => res.json())
            for (let [key, val] of Object.entries(res)) {
                // console.log(key);
                if (key == 'products') {
                    this.data = structuredClone(val)
                }
            } return this.data
        } catch (error) {
            console.log(`Banggg: ${error}`);
        }
    }

    async getInfo() {
        try {
            const takeRes =await this.urlInfo()
            for (let [key, val] of Object.entries(takeRes)) {
                if (val.id==2)
                console.log(val);
            }
        } catch (error) {
            console.log(`Bangg2: ${error}`);
        }
    }
}
const product = new Product()
product.urlInfo()
product.getInfo()

