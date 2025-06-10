// ------------------------------------------------------
function clearInput() {
    document.getElementById('name').value = '';
    document.getElementById('count').value=''
}
const score = document.getElementById('count1');
const res = document.getElementById('result');
const name1 = document.getElementById('name');
const count = document.getElementById('count');
let userid1 = document.getElementById('userId');
let compid1 = document.getElementById('compId')
let userId = Number(userid1.textContent);
let compId = Number(compid1.textContent);
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
    const allbtn = document.querySelectorAll('.btn');
    let i = 1;
    function returnRes(user, comp) {
        // console.log("User:", user, "Kompyuter:", comp);
        if (user === comp) {
            res.textContent = "Durrang!";
        } else if (
            (user === 1 && comp === 2) ||
            (user === 2 && comp === 3) ||
            (user === 3 && comp === 1)
        ) {
            i++;
            userId+=1
            userid1.textContent=(userId)
            res.textContent = "Siz yutdingiz!";
        } else {
            compId += 1
            compid1.textContent=(compId)
            res.textContent = "Kompyuter yutdi!";
            i++;
        }

        score.textContent = `${i}/${count2}`;
        if (i > count2) {
            alert("O'yin tugadi!");
        }
    }

    allbtn.forEach(item => {
        item.addEventListener('click', () => {
            if (i <= count2) {
                const userValue = Number(item.value);
                const compValue = Math.floor(Math.random() * 3);
                returnRes(userValue, compValue);
            }
        });
    });
    
}
