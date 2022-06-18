const textarea = document.querySelector("#vowelstextarea");
const message = document.querySelector(".messagearea");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    // message.innerHTML = vowels(textarea.value)
    message.innerHTML = vowelsRegegx(textarea.value)
})

const vowels = (sentence) => {
    let sent = sentence.toLowerCase()
    let counter = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sent[i] == "a" || sent[i] == "e" || sent[i] == "i" || sent[i] == "o" || sent[i] == "u") {
            counter++;
        }
    }
    return `There are ${counter} vowels in ${sent} `;
}

const vowelsRegegx = (str) => {
    let newStr = str.match(/[aeiou]/gi);
    return newStr === null ? `There are no vowels in ${str}` : `There are ${newStr.length} vowels in ${str} `;
}