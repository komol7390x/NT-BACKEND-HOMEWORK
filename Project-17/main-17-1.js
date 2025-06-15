const url = 'https://dummyjson.com/products';

class Product {
    constructor() {
        this.data = [];
    }

    async urlInfo() {
        try {
            const res = await fetch(url).then(res => res.json());
            if (res.products) {
                this.data = structuredClone(res.products);
            }
            return this.data;
        } catch (error) {
            console.log(`Banggg: ${error}`);
        }
    }

    async getInfo() {
        const takeRes = await this.urlInfo();
        const wrapper = document.getElementById('wrapper');
        const load = document.getElementById('load');
        takeRes.forEach(val => {
            const container = document.createElement('div');
            const title = document.createElement('h4');
            const rating = document.createElement('span');
            const stock = document.createElement('span');
            const oldPrice = document.createElement('h5');
            const newPrice = document.createElement('p');
            const newPrice2 = document.createElement('p');
            const image = document.createElement('img');

            container.classList.add('container');
            title.classList.add('productName');
            rating.classList.add('rating');
            stock.classList.add('stock');
            oldPrice.classList.add('oldPrice');
            newPrice.classList.add('newPrice');
            newPrice2.classList.add('newPrice2');
            image.classList.add('image1');

            image.src = `${val.thumbnail}`;
            container.appendChild(image);

            const price1 = Math.floor(val.price * 1000);
            const discount = Math.floor(price1 * (1 - (val.discountPercentage / 100)));

            title.textContent = val.title;
            container.appendChild(title);

            rating.textContent = `⭐️ ${val.rating}`;
            container.appendChild(rating);

            stock.textContent = ` (${val.stock} rating)`;
            container.appendChild(stock);

            newPrice.textContent = `${Math.floor(discount / 12)} sum/month`;
            container.appendChild(newPrice);

            oldPrice.textContent = `${price1} sum`;
            container.appendChild(oldPrice);

            newPrice2.textContent = `${discount} sum`;
            container.appendChild(newPrice2);

            container.classList.add('product');
            if (val.id <= 4) {
                container.classList.add('show');
            }

            wrapper.appendChild(container);
        });
        load.style.display = 'none'
        const btn = document.getElementById('showAllBtn');
        btn.addEventListener('click', () => {
            const allProducts = document.querySelectorAll('.container');
            allProducts.forEach(item => item.classList.add('show'));
            btn.style.display = 'none';
        });
    }
}

const product = new Product();
product.getInfo();
