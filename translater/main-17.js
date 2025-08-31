async function translateText(text, firtstLang, secondLang) {
    const URL = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${firtstLang}|${secondLang}`
    try {
        const res = await fetch(URL).then(res => res.json())
        if (res.responseStatus !== 200) {
            throw new Error(`Serverda xatolik ${res.responseStatus}`)
        }
        return res.responseData.translatedText
    } catch (error) {
        const res = await fetch(URL).then(res => res.json())
        return `Serverda xatolik :(`
    }
}
const btnEng = document.getElementById('enguzb');
const btnUzb = document.getElementById('uzbeng');
const clear = document.getElementById('clear');

btnUzb.addEventListener('click', uzbTrans);
btnEng.addEventListener('click',engTrans)
clear.addEventListener('click', clearValue)

const textRight = document.getElementById('text_area_right')

async function engTrans() {
    textRight.value = '';
    const textLeft = document.getElementById('text_area_left').value
    const btnE = document.getElementById('engB');
    const btnU = document.getElementById('uzbB')

    btnE.innerText ='English'
    btnU.innerText= "O'zbek"

    btnEng.style.backgroundColor = 'rgba(128, 19, 0, 0.877)'
    btnEng.style.transform = 'scale(1.1)'
    btnUzb.style.backgroundColor = ' rgba(0, 128, 0, 0.363)';
    btnUzb.style.transform = 'scale(1)';

    res = await translateText(textLeft, "en", "uz")
    if (textLeft == 0) {
        textRight.value = "Matn kiriting!";
        textLeft.value='Please,input Text!'
        return
    }

    textRight.value = res
}
async function uzbTrans() {
    textRight.value = '';
    const textLeft = document.getElementById('text_area_left').value
    const btnE = document.getElementById('engB');
    const btnU = document.getElementById('uzbB')

    btnU.innerText = 'English'
    btnE.innerText = "O'zbek"

    btnUzb.style.backgroundColor = 'rgba(0, 128, 0, 0.89)';
    btnUzb.style.transform = 'scale(1.1)';
    btnEng.style.backgroundColor ='rgba(128, 19, 0, 0.363) '
    btnEng.style.transform = 'scale(1)'

    res = await translateText(textLeft, "uz", "en")
    if (textLeft == 0) {
        textRight.value = "Matn kiriting!"
        textLeft.value = 'Please,input Text!'
        return
    }
    textRight.value = res
}
function clearValue() {
    const textLeft = document.getElementById('text_area_left')
    textLeft.value = '';
    textRight.value = '';
    
    btnEng.style.backgroundColor = 'rgba(128, 19, 0, 0.363) '
    btnEng.style.transform = 'scale(1)'

    btnUzb.style.backgroundColor = ' rgba(0, 128, 0, 0.363)';
    btnUzb.style.transform = 'scale(1)';
}