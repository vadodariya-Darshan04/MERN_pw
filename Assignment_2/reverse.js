function reverseWords(sentence) {
    return sentence.trim().split(/\s+/).reverse().join(' ');
}


console.log(reverseWords("Hello World")); 