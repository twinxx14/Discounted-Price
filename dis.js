function getUserInput () {
    var amount = document.getElementById("amount").value;

    if (amount >= 1000 && amount < 5000) {
        let disPrice = amount*0.90;
        document.getElementById("demo").innerHTML = 'Amount:  ' + amount + '\nDiscounted Amount: ' + disPrice;
    } else if (amount >= 5000 && amount < 10000) {
        let disPrice = amount*0.80;
        document.getElementById("demo").innerHTML = 'Amount:  ' + amount + '\nDiscounted Amount: ' + disPrice;  
    } else if (amount >= 10000) {
        let disPrice = amount*0.70;
        document.getElementById("demo").innerHTML = 'Amount:  ' + amount + '\nDiscounted Amount: ' + disPrice;
    } else {
        let disPrice = amount;
        document.getElementById("demo").innerHTML = 'Amount:  ' + amount + '\nDiscounted Amount: ' + disPrice;   
    }

    
}