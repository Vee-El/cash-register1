
function cashRegister(price, cash, cid) {
    let status = ``;
    let change = [];
    let cidTotal = 0
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
    


    // counts the total cash in drawer 
    for (let i = 0; i < cid.length; i++) {
        let value = cid[i][1];
        cidTotal += value;
        cidTotal = Math.round(cidTotal*100)/100;
    }   
    // delete
    console.log(`cidTotal: ${cidTotal}`);

    // sums cash minus price
    let changeDue = cash - price
    // delete
    console.log(`changeDue: ${changeDue}`);

    // status: "INCORRECT_PAYMENT", change: []  
    if (cash < price) {
        status = "INCORRECT_PAYMENT"; 
        // delete
        console.log(`status: "INCORRECT_PAYMENT", change: []`);
    }

    // status: "INSUFFICIENT_FUNDS", change: []
    if (cidTotal < changeDue) {
        status = "INSUFFICIENT_FUNDS";
        // delete
        console.log(`status: "INSUFFICIENT_FUNDS", change: []`);
    }
  
    /* status: "CLOSED", change: [...]
    with cash-in-drawer as the value for the key change if it is equal to the change due. 
    Include each currency unit in the drawer, even if its value is zero. 
    (i.e. DO display ["NICKEL", 0]) */
    if (cidTotal === changeDue) {
        status = "CLOSED";
        // returns PENNY,0.5,NICKEL,0... and not ["PENNY", 0.5], ["NICKEL", 0],...
        change = cid; 
        // delete
        console.log(`status: ${status}, change: ${change}`)
    }    

    /* status: "OPEN", change: [...]
    with the change due in coins and bills, as the value of the change key. Only include the 
    value of a currency unit if its value is not zero. (i.e. do NOT display ["NICKEL", 0])
    */
    if (cidTotal > changeDue) {
        /* create loop working from the end of the 'cid' array - reverse()
        checking if the value is less than change due and more than $0.00 - cid[j][1]
        if it is then deduct the value from 'changeDue' and add it to the 'change' array - splice()
        */

    }  
    

    










    // return `status: ${status}, change: ${change}`; 
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

