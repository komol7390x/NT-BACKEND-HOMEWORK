const wrapper = document.getElementById('wrapper');
const box = document.getElementById('box1');
const h3 = document.getElementById('userId');
const h4 = document.getElementById('id');
const h5 = document.getElementById('title');
const p = document.getElementById('body');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => takeResult(res))
function takeResult(element) {
    for (let item of element) {
        h3.textContent = `User ID: ${item.userId}`;
        h4.textContent = `ID: ${item.id}`
        h5.textContent = `Title: ${item.title.slice(0, 35)}`
        p.textContent = `Body: ${item.body.slice(0, 50)}`
        box.appendChild(h3,);
        box.appendChild(h4);
        box.appendChild(h5);
        box.appendChild(p);
        wrapper.appendChild(box)
    }
}