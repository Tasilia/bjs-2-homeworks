// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;
  for (let a of arr) {
    if (a < min) {
      min = a;
    }
    if (a > max) {
      max = a;
    }
    sum += a;
  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let a of arr) {
    sum += a;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let arr of arrOfArr) {
    let sum = func(arr);
    if (sum > max) {
      max = sum; 
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let a of arr) {
    if (a < min) {
      min = a;
    }
    if (a > max) {
      max = a;
    }
  }
  return Math.abs(max - min)
}
