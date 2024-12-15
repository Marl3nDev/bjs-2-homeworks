"use strict"

function solveEquation(a, b, c) {

  let arr = [];
  let d = b**2 - 4 * a * c;

  if (d < 0) {

    return arr;

  } else if ( d === 0) {

    let x = -b / (2 * a);

    arr.push(x);
    return arr;

  } else {

    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);

    arr.push(x1, x2);
    return arr;

  }

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let n = countMonths;

  let payment = S * (P + (P / (((1 + P)**n) - 1)))
  let totalPayment = payment * n;
  let totalAmount = +totalPayment.toFixed(2);

  return totalAmount;
}

