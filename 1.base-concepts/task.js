function solveEquation(a, b, c) {
  let arr = [];
  "use strict";
  const discriminant = b**2-4*a*c;
  if (discriminant === 0) {
    arr.push(-b/(2*a))
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/(2*a));
    arr.push((-b - Math.sqrt(discriminant) )/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  "use strict";
  let numberOfPercent = Number(percent);
  if (numberOfPercent < 0 || Number.isNaN(numberOfPercent) || numberOfPercent > 99) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  let numberOfContribution = Number(contribution);
  if (numberOfContribution < 0 || Number.isNaN(numberOfContribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  let numberOfAmount = Number(amount);
  if (numberOfAmount < 0 || Number.isNaN(numberOfAmount) || numberOfAmount < numberOfContribution) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  let credit = numberOfAmount - numberOfContribution;
  let creditTerm = Math.floor((date.getTime() - Date.now()) / 1000 / 60 / 60 / 24 / 30);
  let P = numberOfPercent/100/12;
  let monthlyPayment = credit * (P + (P / (((1 + P) ** creditTerm) -1)));
  totalAmount = Math.round((monthlyPayment * creditTerm) * 100) / 100;
  return totalAmount;
}
