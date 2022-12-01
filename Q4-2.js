
const mySentence1 = "i love javascript";
const words1 = mySentence1.split(" ");

console.log(words1.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" "));
