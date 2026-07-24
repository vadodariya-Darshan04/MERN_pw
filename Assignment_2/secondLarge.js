function secondLargest(arr1) {
    arr1.sort((a, b) => b - a);
    return arr[1];
}
let arr = [10, 100, 50, 30, 20, 40];
console.log(secondLargest(arr));