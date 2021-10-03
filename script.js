var balance = 0;
var income = 0;
var expense = 0;
//localStorage.clear();

document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault()
  });

transaction=()=>{
var incomeName = document.getElementById('text').value;
var amount = parseInt(document.getElementById('amount').value);
//localStorage.setItem(incomeName,amount)
if(amount>0)
{
    income+=amount;
    balance+=amount;
}
else
{
    balance+=amount;
    expense-=amount;
}
document.getElementById('balance').innerHTML=' ₹'+balance;
document.getElementById('money-plus').innerHTML=' ₹'+income;
document.getElementById('money-minus').innerHTML=' ₹'+expense;
var li = document.createElement('li');
    var txt = document.createTextNode(incomeName);
    li.appendChild(txt);
    if(amount > 0){
        li.className = 'plus'
    }
    else{
        li.className = 'minus'
    }
    document.getElementById('list').appendChild(li);
    var span = document.createElement("SPAN");
    var amount = document.createTextNode(amount);
    span.appendChild(amount);
    li.appendChild(span);

    document.getElementById("text").value = "";
    document.getElementById("amount").value = "";
}
