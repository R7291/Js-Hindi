const accountId = 144553
let accountEmail = "ruchi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//accountId = 2 // not allowed

accountEmail = "rs@gmail.com"
accountPassword = "222222"
accountCity = "bangluru"
let accountState;

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);