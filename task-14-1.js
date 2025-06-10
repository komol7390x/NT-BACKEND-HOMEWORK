fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => res.forEach(element => {
        const continer = document.getElementById('containerBox')
        const box = document.createElement('div');
        const title = document.createElement('div');
        const id = document.createElement('div')
        const body = document.createElement('div')

        box.classList.add('box');
        title.classList.add('title');
        id.classList.add('id');
        body.classList.add('body');
        
        id.textContent = `ID: ${element.id}`
        title.textContent = `TITLE: ${element.title.slice(0, 50) }`
        body.textContent = `BODY: ${element.body.slice(0, 50)}`
                
        box.appendChild(id)
        box.appendChild(title)
        box.appendChild(body)

        continer.appendChild(box)
    })).catch(error => {
        console.log(`Xatolik yuz berdi: ${error.message}`);
        const continer = document.getElementById('containerBox')
        continer.textContent = `Xatolik yuz berdi: ${error.message}`
    })