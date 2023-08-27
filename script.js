function ussd (){
    let user = prompt(`please enter your name`).toUpperCase();
    let code;
    while (true) {
         code  = prompt(`Welcome, ${user} ! Please enter First Bank transfer code (*894#) `)
    if (code === "*894#") {

    let options = prompt (`what type of account do you have 
    1. savings
    2. current 
    `);
    if (options == "1" || options == "2"){
        let pin = prompt("Enter your 4-digit PIN (Your default PIN is 1234)");
        if (pin === "1234") {
            let options = prompt(`Hello ${user}, what would you like to do?
            1. Balance      2. Buy airtime
            3. Transfer     4. Pay bills
            `);
            if (options === "1") {
            alert(`Dear ${user}, your Balance is NGN ${bal}.`);
        } else if (options === "2") {
            let withdraw = prompt("How much would you like to Withdraw?");
            if (!isNaN(withdraw)) {
                alert(`Congratulations ${user}, your Withdrawal of NGN ${withdraw} was successful.`);
        } else {
            alert("Invalid input. Please enter a valid number.");
            }
        } else if (options === "3") {
            let accountNumber = prompt("Input recipient's account number:");
            let num = prompt("How much would you like to send?")
            if (!isNaN(accountNumber)) {
                alert(`Congratulations ${user}, your transfer of NGN ${num} to account number ${accountNumber} was successful.`);
             } else {
                    alert("Invalid input. Please enter a valid account number.");
                }
        }else if (options === "4") {
            let deposit = prompt("How much would you like to deposit?");
            if (!isNaN(deposit)) {
                alert(`Congratulations ${user}, your deposit of NGN ${deposit} was successful.`);
            } else {
                alert("Invalid input. Please enter a valid number.");
            }
            } else {
                alert("Invalid option selected.");
            }
    } else {
            alert("Please input correct PIN and try again.");
        }
    }else{  
    alert ("please enter valid first bank USSD code")
}
}

    }
}
