const textarea = document.getElementById('text-input');
const btnEncrypt = document.getElementById('encrypt');
const btnDecrypt = document.getElementById('decrypt');
const outputText = document.querySelector('.output-text');
const outputAlert = document.querySelector('.output-alert');

function encrypt() {
    const textareaValue = textarea.value;

    let result = textareaValue
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

    outputText.innerHTML = `<p id="result">${result}</p>`;
};

function decrypt() {
    const textareaValue = textarea.value;

    let result = textareaValue
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

    outputText.innerHTML = `<p id="result">${result}</p>`;
}

btnEncrypt.addEventListener("click", () => {
    outputAlert.style.display = "none";
    encrypt();
});

btnDecrypt.addEventListener("click", () => {
    outputAlert.style.display = "none";
    decrypt();
});