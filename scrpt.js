 // ************************************************** USSD
// ask name
// let user = prompt("What is your name?");
// let code = prompt(`Welcome, ${user}! Please enter First transfer code:`);
// welcome user and ask to enter transfer code
// if (code === "*894#") {
// check balance
// withdraw
// transfer
// send money
// enter reciepient account number(if account number is 10)
// enter amount
// enter pin
let user = prompt(`please enter your name`);
let bank = prompt(`Welcome ${user}! please input your bank name`)
if (isNaN(bank)) {
let options = prompt (`what type of account do you have 
1. savings
2. current `);
if (options == "1" || options == "2"){
    let option = prompt (`please select an option
    1. check balance
    2. withdraw
    3. buy airtime
    4. buy data
    5. transfer`)
if (option == 2 || option == 3 ||option == 4 || option ==5){
    let amount = prompt( "please enter amount")
 alert (`congratulation ${user}! transaction successfull ${amount}`)
    }else if (option == 1){
    alert ("you know the amount in your account abeg")
    }else{
    alert("invalid input")
    }
    }else{
alert ("invalid input")
}
}else{  
alert ("please enter a valid bank name")
}


// if (isNaN(bank)) {
//     let options = prompt (`what type of account do you have 
//     1. savings
//     2. current `);
//     if (options == "1" || options == "2"){
//         let option = prompt (`please select an option
//         1. check balance
//         2. withdraw
//         3. buy airtime
//         4. buy data
//         5. transfer`)
//     if (option == 2 || option == 3 ||option == 4 || option ==5){
//         let amount = prompt( "please enter amount")
//      alert (`congratulation ${user}! transaction successfull ${amount}`)
//         }else if (option == 1){
//         alert ("you know the amount in your account abeg")
//         }else{
//         alert("invalid input")
//         }
//         }else{
//     alert ("invalid input")
//     }
//     }else{  
//     alert ("please enter a valid bank name")
//     }
    