
function cashRegister(price, cash, cid) {
    let status = ``;
    let change = [];
    const currencies = [
        { name: 'ONE HUNDRED', value: 100.00},
        { name: 'TWENTY', value: 20.00},
        { name: 'TEN', value: 10.00},
        { name: 'FIVE', value: 5.00},
        { name: 'ONE', value: 1.00},
        { name: 'QUARTER', value: 0.25},
        { name: 'DIME', value: 0.10},
        { name: 'NICKEL', value: 0.05},
        { name: 'PENNY', value: 0.01}
      ];

    // write super duper code in here

    if (price === cash) {
        status = "CLOSED"
        change = [
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
    };





    return `status: ${status}, change: ${change}`; 
}


cashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);

cashRegister(19.5, 18, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]);
  // => {status: "INCORRECT_PAYMENT", change: []}

  cashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]);
  // => {status: "INSUFFICIENT_FUNDS", change: []}

  cashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]);
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

  cashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]);
  
  // => {status: "OPEN", change: [["QUARTER", 0.5]]}

  cashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]);
  /*
  {
    status: "OPEN",
    change: [
      ["PENNY", 0.04],
      // (no nickels since zero)
      ["DIME", 0.2],
      ["QUARTER", 0.5],
      ["ONE", 1],
      ["FIVE", 15],
      ["TEN", 20],
      ["TWENTY", 60]
      // (no hundred since zero)
    ]
  }
  */

