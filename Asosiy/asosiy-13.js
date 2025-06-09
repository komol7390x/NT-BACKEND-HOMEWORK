 const email = document.getElementById('email');
    const pass = document.getElementById('password');
    const btn = document.getElementById('btn');
    const h1 = document.createElement('h1');

btn.addEventListener('click', function () {
    if (email.value.length == 0 || pass.value.length == 0) {
        h1.textContent = 'Hammasini to`ldirish kerak'
        h1.style.color = 'red'
        h1.style.fontSize = '20px';
        document.body.appendChild(h1)
        return
        }
    const res = `Login: ${email.value}        Password: ${pass.value}`
    h1.textContent = res;
    h1.style.color = 'red';
    h1.style.fontSize = '20px';
    document.body.appendChild(h1)
})