/* first class js code */
document.getElementById("case-plus").addEventListener('click', function(){
    fclassClick(true)   
})

document.getElementById('case-minus').addEventListener('click', function(){
    fclassClick(false)
})

function fclassClick(dataInput){
    const firstInput = document.getElementById('case-fclass');
    const inputNum = parseInt(firstInput.value);
    
    if(dataInput == true){
        totalInput = inputNum + 1;
    }
    if(dataInput == false && inputNum>0){
        totalInput = inputNum - 1;
    }

    document.getElementById('case-fclass').value = totalInput;
    const totalMoney = totalInput * 150; 
    
    document.getElementById("subtotal").innerText ='$ ' + totalMoney;
    
    const vatTotal = totalMoney * .10;
    document.getElementById('vat').innerText ='$ ' + vatTotal;

    const inTotal = totalMoney + vatTotal;
    document.getElementById('total-amount').innerText ='$ ' + inTotal;

    calculation()
}

/* economy js code */
document.getElementById('case-increase').addEventListener('click', function(){
    caseEconomy(true)
})

document.getElementById('case-decrease').addEventListener('click', function(){
    caseEconomy(false)
})

function caseEconomy(eClass){
    const input = document.getElementById('case-economy').value;
    const inputNumber = parseInt(input);
    if(eClass == true){
        totalValue = inputNumber + 1;
    }
    if(eClass == false && inputNumber>0){
        totalValue = inputNumber - 1;
    }
    document.getElementById('case-economy').value = totalValue;
    totalAmount = totalValue * 100 ;

    document.getElementById("subtotal").innerText ='$ ' + totalAmount;
    
    const vatTotal = totalAmount * .10;
    document.getElementById('vat').innerText ='$ ' + vatTotal;

    const inTotal = totalAmount + vatTotal;
    document.getElementById('total-amount').innerText ='$ ' + inTotal;

    calculation()
}

/* calculation subtotal */
function calculation(){
    const firstInput = document.getElementById('case-fclass').value;
    const inputNum = parseInt(firstInput);

    const input = document.getElementById('case-economy').value;
    const inputNumber = parseInt(input);

    const totalSub = totalInput * 150 + totalValue * 100;
    document.getElementById("subtotal").innerText = '$ ' + totalSub;
    
    const vatTotal = totalSub * .10;
    document.getElementById('vat').innerText ='$ ' + vatTotal;

    const inTotal = totalSub + vatTotal;
    document.getElementById('total-amount').innerText ='$ ' + inTotal;

}






