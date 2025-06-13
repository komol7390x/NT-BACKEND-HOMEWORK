const url = 'https://dummyjson.com/products'
class Product {
    constructor() {
        this.data = []
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
        const takeRes = await this.urlInfo()
        takeRes.forEach(val => {
            const wrapper = document.getElementById('wrapper')
            const constainer = document.createElement('div')
            const title = document.createElement('h4')
            const rating = document.createElement('span');
            const stock = document.createElement('span');
            const oldPrice = document.createElement('h5');
            const newPrice = document.createElement('p')
            const newPrice2 = document.createElement('p')

            constainer.classList.add('container')
            title.classList.add('productName');
            rating.classList.add('rating');
            stock.classList.add('stock');
            oldPrice.classList.add('oldPrice');
            newPrice.classList.add('newPrice')
            newPrice2.classList.add('newPrice2')

            const price1 = Math.floor(val.price * 1000)
            const discount = Math.floor(price1 * (1 - (val.discountPercentage / 100)))

            title.textContent = val.title
            constainer.appendChild(title)

            rating.textContent = `⭐️ ${val.rating}`
            constainer.appendChild(rating)

            stock.textContent = ` ( ${val.stock} rating)`
            constainer.appendChild(stock)

            newPrice.textContent = `${Math.floor(discount / 12)} sum/month`
            constainer.appendChild(newPrice)

            oldPrice.textContent = `${price1} sum`
            constainer.appendChild(oldPrice)

            newPrice2.textContent = `${discount} sum`
            constainer.appendChild(newPrice2)

            wrapper.appendChild(constainer)
        })
        return
        try {

        } catch (error) {
            console.log(`Bangg2: ${error}`);
        }
    }
}
const product = new Product()
product.urlInfo()
product.getInfo()

