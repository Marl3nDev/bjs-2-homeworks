function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }
  
  avg = sum/arr.length;

  return { min: min, max: max, avg: +avg.toFixed(2) };
}

function summElementsWorker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let difference;

  if (arr.length <= 0) {
      difference = 0;
   } else {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] > max) {
              max = arr[i];
          }
  
          if (arr[i] < min) {
              min = arr[i];
          }
      }

      difference = max - min;
   }  
 return difference
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference;

  if (arr.length <= 0) {
      difference = 0;
  } else {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] % 2 === 0) {
              sumEvenElement += arr[i]
          }else {
              sumOddElement += arr[i]
          }
      }
      difference = sumEvenElement - sumOddElement
  }

      return difference
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let difference;

  if (arr.length <= 0) {
      difference = 0;
  } else {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] % 2 === 0) {
              sumEvenElement += arr[i];
              countEvenElement++
          }
      }
      difference = sumEvenElement / countEvenElement;
  }

  return difference;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
      const arr = arrOfArr[i];

      const result = func(...arr);

      if (result > maxWorkerResult) {
          maxWorkerResult = result;
      }
  }

  return maxWorkerResult;
}
