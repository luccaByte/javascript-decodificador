const textArea = document.getElementById('text-input');
const btnEncrypt = document.getElementById('encrypt');
const btnDecrypt = document.getElementById('decrypt');
const outputText = document.querySelector('.output-text');
const outputAlert = document.querySelector('.output-alert');
const btnOutputCopy = document.getElementById('output-copy');
const cautionArea = document.querySelector('.textarea-alert');

function encrypt() {
    const textareaValue = textArea.value;

    let result = textareaValue
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

    outputText.innerHTML = `<p id="result">${result}</p>`;
};

function decrypt() {
    const textareaValue = textArea.value;

    let result = textareaValue
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

    outputText.innerHTML = `<p id="result">${result}</p>`;
};

function handleOutput() {
    outputAlert.style.display = "none";
    btnOutputCopy.style.display = "block";
    outputText.classList.add('active');
};

function disableOutput() {
    outputText.classList.remove('active');
    btnOutputCopy.style.display = 'none';
    outputAlert.style.display = 'block';
}

const validation = (result) => {
    const regex = /^[a-z\s]*$/;

    return regex.test(result);
};

btnEncrypt.addEventListener("click", (e) => {
    e.preventDefault();
    const result = textArea.value.trim();

    if (result === '') {
        disableOutput();
        cautionArea.textContent = 'Campo vazio. Insira o seu texto!';
        cautionArea.classList.add('blink');
    } else {
        const isValid = validation(result);

        if (isValid) {
            handleOutput();
            encrypt();
            cautionArea.innerHTML = '</br>';
            cautionArea.classList.remove('blink');
        } else {
            outputAlert.style.display = 'block';
            cautionArea.textContent = 'Escreva somente letras minúsculas e sem acentos!';
            cautionArea.classList.add('blink');
        }
    }
});

btnDecrypt.addEventListener("click", (e) => {
    e.preventDefault();
    const result = textArea.value.trim();

    if (result === '') {
        disableOutput();
        cautionArea.textContent = "Campo vazio. Insira o seu texto!";
        cautionArea.classList.add('blink');
    } else {
        const isValid = validation(result);

        if (isValid) {
            handleOutput();
            encrypt();
            cautionArea.innerHTML = '</br>';
            cautionArea.classList.remove('blink');
        } else {
            outputAlert.style.display = "block";
            cautionArea.textContent = "Escreva somente letras minúsculas e sem acentos!";
            cautionArea.classList.add('blink');
        }
    }
});

function copy() {
    const resultText = document.getElementById('result').textContent;

    navigator.clipboard.writeText(resultText)
    .then(() => {
        alert('Texto copiado para a área de transferência!');
    })
    .catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}

btnOutputCopy.addEventListener('click', copy);

