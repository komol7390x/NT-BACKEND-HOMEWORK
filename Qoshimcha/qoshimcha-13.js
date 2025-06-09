// ------------------------------------------------------
function clearInput() {
    document.getElementById('name').value = '';
    document.getElementById('count').value=''
}
const score = document.getElementById('count1');
const res = document.getElementById('result');
const name1 = document.getElementById('name');
const count = document.getElementById('count');
const allbtn = document.querySelectorAll('.btn');
const compChoose = Math.floor(Math.random() * 3);
// --------------------------------------------------------------------
function startGame() {
    let count2 = Number(count.value)
    if (name1.value.length == 0 || count.value.length == 0 || count2 < 1) {
        alert('Bosh joy qolmasin va Countga son kiriting!')
        clearInput()
        return
    } else if (count2 > 50) {
        count2 = 50
    }
    res.textContent = "GAMING...."
    let user1 = document.getElementById('user');
    let name2 = name1.value.slice(0, 6).toUpperCase();
    user1.textContent = name2
// -----------------------------------------------------------------------
allbtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        playGame(btn.value)
    })
})
function playGame(userValue) {
    const compChoose = Math.floor(Math.random() * 3);
    console.log(userValue,compChoose);
}

    for (let i = 1; i <= count2; i++){
        score.textContent = `${i}/${count2}`      
    }
}
