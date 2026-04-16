async function translateText() {
    const apiKey = document.getElementById("apiKey").value;
    const region = document.getElementById("region").value;
    const text = document.getElementById("inputText").value;
    const targetLang = document.getElementById("targetLang").value;

    if (!apiKey || !region || !text) {
        alert("Please fill all fields!");
        return;
    }

    const endpoint = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=" + targetLang;

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Ocp-Apim-Subscription-Key": apiKey,
                "Ocp-Apim-Subscription-Region": region,
                "Content-Type": "application/json"
            },
            body: JSON.stringify([{ Text: text }])
        });

        const data = await response.json();

        document.getElementById("outputText").innerText =
            data[0].translations[0].text;

    } catch (error) {
        console.error(error);
        alert("Error occurred while translating.");
    }
}