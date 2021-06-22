function submitData() {
  // retrieve data
  let balance = parseFloat(investmentForm.balance.value);
  let annualRate = parseFloat(investmentForm.rate.value);
  let months = parseFloat(investmentForm.months.value);

  if (
    isNaN(balance) ||
    !balance ||
    balance < 0 ||
    !annualRate ||
    annualRate < 0 ||
    !months ||
    months < 0
  ) {
    // error validation
    updateDOM('Please include valid values for these three fields.', 'red');
    return;
  }

  updateDOM(
    `The future value of your investment is $${computeFutureValue(
      balance,
      annualRate,
      months
    )}.`,
    'green'
  );
}

function computeFutureValue(balance, annualRate, months) {
  let monthlyRate = annualRate / 12;

  for (let month = 1; month <= months; month++) {
    let interest = balance * monthlyRate;

    interest = parseFloat(interest.toFixed(2)); // round to pennies

    balance += interest;
  }
  return parseFloat(balance.toFixed(2).toLocaleString());
}

function updateDOM(value, color) {
  document.getElementById('output').innerHTML = value;
  document.getElementById('output').style.color = color;
}
