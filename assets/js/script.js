const OperationNameEl=document.getElementById("operationName")
const OperationAmountEl=document.getElementById("operationAmount")
const OperationBtnEl=document.querySelector(".save-btn")
const ProfitBoxEl =document.getElementById("profitbox")
const ExpenseBoxEl =document.getElementById("lossbox")
const BalanceBoxEl =document.getElementById("balance")
let Profit=0
let Expense=0

function HandleOperation(){
    let OperationNameValue=OperationNameEl.value;
    let OperationAmountValue = +OperationAmountEl.value;
    if(OperationAmountValue>0){
        Profit=Profit+OperationAmountValue;
    }else(){
        Expense = Expense + OperationAmountValue;
    }
    ProfitBoxEl.innerText = '$'
    ExpenseBoxEl.innerText = 
    console.log("Bizim qazancimiz"$(Profit))
    console.log("Bizim xercimiz"$(Expense))
    function CalculateTotalProfit () {
        const TotalProfit = Profit - Expense;
        BalanceBoxEl.innerText;
    }
}

OperationBtnEl.addEventListener("click",HandleOperation)