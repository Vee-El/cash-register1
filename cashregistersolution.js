function cashRegister(price, cash, cid){

    // const currencies = [
    //     { name: 'ONE HUNDRED', value: 100.00},
    //     { name: 'TWENTY', value: 20.00},
    //     { name: 'TEN', value: 10.00},
    //     { name: 'FIVE', value: 5.00},
    //     { name: 'ONE', value: 1.00},
    //     { name: 'QUARTER', value: 0.25},
    //     { name: 'DIME', value: 0.10},
    //     { name: 'NICKEL', value: 0.05},
    //     { name: 'PENNY', value: 0.01}
    // ];

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
    // Checking enough cash is provided

    if (cash < price){
        return {status: "INCORRECT_PAYMENT", change: []}
    }

    // The below block calculates total cash in the drawer and change due, then returns the required status if there is not enough change or the change is exactly correct. I have turned everything into pennies as I found this less
    //  confusing than using the .Math function and also avoided problems with only being able to round to an integer. I also used a 'for of' loop instead of the usual for loop

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

    //The below block checks for available change by looping through the cid, subtracting the used currency and adding it the the finalChange array which will be returned in the answer
    // cid is reversed to work through the largest denomination first for efficiency

    cid = cid.reverse()
    finalChange = []
    for (let element of cid){

        //This section is looping over each nested array within cid to check which currency it is on
        let counter = [element[0], 0];
        // This below line in just multiplying by 100 as above to avoid issues with decimals
        element[1] = element[1]*100;
        //the below line first make sure we actually have some of the currency in the drawer, then uses the 'values' object to make sure the value of the unit is less than the change we need
        while (element[1] > 0 && values[element[0]] <= change){
            // the next 3 lines remove the money from the drawer and put it into the counter, it updates the change variable accordingly
            change -= values[element[0]];
            element[1] -= values[element[0]];
            counter[1] += values[element[0]];
        }
        //the below adds the money removed to the final change array
        if (counter[1] > 0){
            finalChange.push(counter);
        }
    }
    // if change is over 0 it means we didn't have the correct change so insufficient funds message returned
    if (change > 0){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    // the below loop just goes through the finalChange array and returns the values to what they shoud be after I multiplied to avoid decimal issues, a for of loop would be more consistent but my brain hurts too much at this point
    for (i = 0; i < finalChange.length; i++){
        finalChange[i][1] = finalChange[i][1]/100
    }
    finalChange = finalChange.reverse()
    return {status: "OPEN", change: finalChange};
}
