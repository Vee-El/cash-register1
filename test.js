function cashRegister(price, cash, cid) {
    let changeDue = cash - price;
    let cidTotal = cid.reduce((sum, item) => sum + item[1], 0);
    let change = [];

    const currencies = [        { name: 'ONE HUNDRED', value: 100.00},        { name: 'TWENTY', value: 20.00},        { name: 'TEN', value: 10.00},        { name: 'FIVE', value: 5.00},        { name: 'ONE', value: 1.00},        { name: 'QUARTER', value: 0.25},        { name: 'DIME', value: 0.10},        { name: 'NICKEL', value: 0.05},        { name: 'PENNY', value: 0.01}    ];

    if (changeDue > cidTotal) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    if (changeDue < 0) {
        return {status: "INCORRECT_PAYMENT", change: []};
    }

    for (let i = currencies.length - 1; i >= 0; i--) {
        let currencyName = currencies[i].name;
        let currencyValue = currencies[i].value;
        let availableAmount = 0;

        for (let j = 0; j < cid.length; j++) {
            if (cid[j][0] === currencyName) {
                availableAmount = cid[j][1];
                break;
            }
        }

        if (changeDue >= currencyValue && availableAmount > 0) {
            let currencyCount = Math.floor(changeDue / currencyValue);
            if (currencyCount * currencyValue > availableAmount) {
                currencyCount = Math.floor(availableAmount / currencyValue);
            }
            changeDue -= currencyCount * currencyValue;
            changeDue = Math.round(changeDue * 100) / 100;
            change.push([currencyName, currencyCount * currencyValue]);
        }
    }

    if (changeDue === 0) {
        let changeInDesiredFormat = [];
        cid.forEach(function(item) {
            if (item[1] > 0) {
                changeInDesiredFormat.push(item);
            }
        });
        return {status: "CLOSED", change: changeInDesiredFormat};
    }

    return {status: "OPEN", change: change};
}


  

console.log (cashRegister(19.5, 18, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]));
  // => {status: "INCORRECT_PAYMENT", change: []}
  console.log(cashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]));
  // => {status: "INSUFFICIENT_FUNDS", change: []}
  console.log(cashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]);)
  /* 
  {
    status: "CLOSED",
    change: [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ]
  }
  */