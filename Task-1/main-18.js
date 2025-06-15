async function translateText(text, sourceLang, targetLang) {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.responseStatus !== 200) {
            throw new Error(`Server javobi: ${data.responseStatus} - ${data.responseDetails}`);
        }
        return data.responseData.translatedText;
    } catch (error) {
        console.error('Xatolik yuz berdi:', error.message);
    }
}

translateText("Hello", "en", "uz").then(res => console.log("Tarjima:", res));
  