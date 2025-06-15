// // const GET_LANG = 'https://libretranslate.com/languages';
// // const fetch = require("node-fetch");
// const POST_LANG ='http://libretranslate.de/translate'
// async function format() {
//     const res = await fetch(POST_LANG, {
//         method: 'POST',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             q: "Salom dunyo",
//             source: "uz",
//             target: "en",
//             format: "text"
//         })
//     })
//     const data = await res.json();
//     console.log(data);
// }
// function salom() {
//     format()
// }
// salom()


// const fetch = require('node-fetch');

async function translateText(text, from = "uz", to = "en") {
    try {
        const response = await fetch("https://translate.argosopentech.com/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                q: text,
                source: from,
                target: to,
                type: "module",
                format: "text",
            })
        });

        if (!response.ok) {
            throw new Error(`Server javobi: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(`Tarjima: ${data.translatedText}`);
    } catch (error) {
        console.error("Xatolik: ", error.message)
    }
}

// Misol: "Salom dunyo" ni ingliz tiliga tarjima qilish
translateText("Salom dunyo", "uz", "en");
