function filterPalindrome(arr1) {
    return arr1.filter(word => {
        const reversed = word.split('').reverse().join('');
        return word === reversed;
    });
}

const input = ["madam", "racecar", "apple", "level", "hello"];
const output = filterPalindrome(input);

console.log(output); 
