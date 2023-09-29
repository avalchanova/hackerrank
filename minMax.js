function miniMaxSum(arr) {
    // Write your code here
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (i !== k) {
                sum += arr[k];
            }
        }
        if (sum < min) {
            min = sum;
        }
        if (sum > max) {
            max = sum;
        }
        sum = 0;
    }
    console.log(min + ' ' + max);
}
miniMaxSum([1, 2, 3, 4, 5]);
