const email = document.getElementById('email')
const pass = document.getElementById('password');
const btn = getElementById('btn');
const h1=document.createElement('h1')
const showResult = () => {
    const res = `Login: ${email} <br>Password: ${pass}`
    res.style.fontSize="50px"
    h1.appendChild(res)
}
document.body.appendChild(h1)