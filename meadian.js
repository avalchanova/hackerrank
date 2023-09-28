function findMedian(arr) {
  let sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(sortedArr);
  let indexofmedian = sortedArr.length / 2 - 0.5;
  let median = sortedArr[indexofmedian];
  return median;
}

findMedian([3, 5, 2, 4, 1]);
