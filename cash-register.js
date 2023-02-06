//function

function cashRegister(price, cash, cid){

    const values = {
        "ONE HUNDRED": 10000,
        "TWENTY": 2000,
        "TEN": 1000,
        "FIVE": 500,
        "ONE": 100,
        "QUARTER": 25,
        "DIME": 10,
        "NICKEL": 5,
        "PENNY": 1,
    }

    // Outputs for POS display
    
    let subTotalOut = Math.round(((price + Number.EPSILON) * 100) / 100).toPrecision(4);
    let salesTaxOut = (subTotalOut - price).toFixed(2);
    let totalOut = price.toFixed(2);
    let amtTendOut = cash.toFixed(2);
    let changeDueOut = (cash - price).toFixed(2);

    document.querySelector('#subTotalOut').innerHTML = subTotalOut;
    document.querySelector('#salesTaxOut').innerHTML = salesTaxOut;
    document.querySelector('#totalOut').innerHTML = totalOut;
    document.querySelector('#amtTendOut').innerHTML = amtTendOut;
    document.querySelector('#changeDueOut').innerHTML = changeDueOut;

    // cashRegister function

    if (cash < price){
        return {status: "INCORRECT_PAYMENT", change: []}
    }

    let change = cash*100 - price*100;
    let totalCid = 0;

    for (let element of cid){
        totalCid += element[1]*100;
    }

    if (totalCid < change){
    return {status: "INSUFFICIENT_FUNDS", change: []};
    } 
 
    if (change === totalCid){
        return {status: "CLOSED", change: cid};
    }

    cid = cid.reverse()
    finalChange = []

    for (let element of cid){

        let counter = [element[0], 0];         
        element[1] = element[1]*100;
        
        while (element[1] > 0 && values[element[0]] <= change){
            change -= values[element[0]];
            element[1] -= values[element[0]];
            counter[1] += values[element[0]];
        }
        
        if (counter[1] > 0){
            finalChange.push(counter);
        }
    }
    
    if (change > 0){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
   
    for (i = 0; i < finalChange.length; i++){
        finalChange[i][1] = finalChange[i][1]/100
    }

    finalChange = finalChange.reverse()
    return {status: "OPEN", change: finalChange};

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

// cashRegister(19.5, 18, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
//   ]);
//   // => {status: "INCORRECT_PAYMENT", change: []}

//   cashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
//   ]);
//   // => {status: "INSUFFICIENT_FUNDS", change: []}

//   cashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
//   ]);
//   /* 
//   {
//     status: "CLOSED",
//     change: [
//       ["PENNY", 0.5],
//       ["NICKEL", 0],
//       ["DIME", 0],
//       ["QUARTER", 0],
//       ["ONE", 0],
//       ["FIVE", 0],
//       ["TEN", 0],
//       ["TWENTY", 0],
//       ["ONE HUNDRED", 0]
//     ]
//   }
//   */

//   cashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
//   ]);
  
//   // => {status: "OPEN", change: [["QUARTER", 0.5]]}

//   cashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
//   ]);
//   /*
//   {
//     status: "OPEN",
//     change: [
//       ["PENNY", 0.04],
//       // (no nickels since zero)
//       ["DIME", 0.2],
//       ["QUARTER", 0.5],
//       ["ONE", 1],
//       ["FIVE", 15],
//       ["TEN", 20],
//       ["TWENTY", 60]
//       // (no hundred since zero)
//     ]
//   }
//   */

