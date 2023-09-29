function diagonalDifference(arr) {
    let n = arr[0].length - 1;
    let sumLeft = 0;
    let sumRight = 0;

    for (let i = 0; i < arr[0].length; i++) {
        sumLeft += arr[i][i];
        sumRight += arr[i][n];
        n--;
    }

    let result = sumLeft - sumRight;
    if (result < 0) {
        result = result * -1;
    }
    return result;
}
diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]);
