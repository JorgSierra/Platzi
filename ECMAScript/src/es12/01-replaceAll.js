const string = "JS es un lenguaje de programacion"

const otherString = string.replace("JS", "C");
console.log(otherString);


const inputText = "If you're :)  and you know it :clap your hands :clap :clap";
const emojiReplace = (text) => {
    let emojized = "";
    emojized = text.replaceAll(':)', '😀');
    emojized = emojized.replaceAll(':clap', '👏🏻');
    return emojized;
}
console.log(emojiReplace(inputText));