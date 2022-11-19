 let transaction_amt = {
    amount:1000,
    income:2000,
    expense:200,
    transact:[
        {text:'Salary', amt:'200', type:'income'},
        {text:'book', amt:'2000', type:'expense'},
         {text:'phone', amt:'20', type:'expense'}
         ]
}
let amt_bal=document.getElementById("amount")
let tot_income=document.getElementById("income")
let tot_expense=document.getElementById("expense")
let tot_history=document.getElementById("tr")
var incomeBtnEl=document.getElementById("ibtn")
var expenseBtnEl=document.getElementById("ebtn")
var nameInputEl=document.getElementById("text")
var amountInputEl=document.getElementById("amt")

function init(){
    updateState();
    initListeners();
    render();

}
function initListeners(){
    incomeBtnEl.addEventListener('click', onAddIncomeClick);
    expenseBtnEl.addEventListener('click', onAddExpenseClick);
}
function onAddIncomeClick(){
    console.log('income', nameInputEl.value, amountInputEl);
}function onAddExpenseClick(){
    console.log('expense');
}

function updateState(){
    var amount = 0,
    income = 0,
    expense = 0;
    item;
    for (var i = 0; i < transaction_amt.transact.length; i++){
        item = transaction_amt.transact[i];

        if(item.type === 'income'){
            income +=item.amount;
        }else if(item.type === 'expense'){
            expense += item.amount;
        }
    }
    amount = income - expense;
    console.log(amount, income, expense)
    transaction_amt.amount = amount;
    transaction_amt.income = income;
    transaction_amt.expense = expense; 
}

function render(){
amt_bal.innerHTML=`${transaction_amt.amount}`;
tot_income.innerHTML=`${transaction_amt.income}`;
tot_expense.innerHTML=`${transaction_amt.expense}`;

var list_items,list_cont,list_amt,item,btnel

for(i=0; i < transaction_amt.transact.length; i++){
item=transaction_amt.transact[i];
    list_items=document.createElement('li')
    list_items.append(item.text)
    list_history.appendChild(list_items);

        list_cont = document.createElement('div');
        list_amt = document.createElement('span');
        if(item.type === 'income'){
            list_amt.classList.add('income-amt');
        }else if(item.type === 'expense'){
            list_amt.classList.add('expense-amt');
        }
        list_amt.innerHTML = `${item.amt}`
        list_cont.appendChild(list_amt);

        btnel = document.createElement('button');
        btnel.innerHTML = 'X';
        list_cont.appendChild(btnel);
        
        list_items.appendChild(list_cont);

}
}
init() 


