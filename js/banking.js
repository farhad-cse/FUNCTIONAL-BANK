document.getElementById('deposite-submit').addEventListener('click',function(){
    const depositeInput = document.getElementById('user-deposite');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    // get deposite
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = previousDepositeTotal + depositeAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositeAmount;
    depositeInput.value= '';
});

// withdraw money
document.getElementById('withdraw-submit').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // get withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const prevWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = prevWithdrawTotal + withdrawAmount;
  
    // update balance after withdraw 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal- withdrawAmount;
    withdrawInput.innerText = '';
});