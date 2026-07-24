function generateOddNumbers(n) {
    const result = [];
    for (let i = 0; i < n; i++) {result.push(2 * i + 1);}
    
    return result;
}
console.log(generateOddNumbers(5)); 
console.log(generateOddNumbers(15)); 