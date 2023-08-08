let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false,
  bonus: NaN,
  penalty: Infinity
}

function sumSalary(salaries) {
  let salariesSum = 0;
  
  for (key in salaries) {
    if ( typeof salaries[key] === "number" && isFinite(salaries[key]) ){
      salariesSum += salaries[key];
    }
  }
  
  return salariesSum;
}
sumSalary(salaries);