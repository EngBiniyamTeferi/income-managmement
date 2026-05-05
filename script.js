let Income = document.getElementById("income")
let expenses = document.getElementById("expenses")
let Total_income = document.getElementById("Total_income")
let total_expense = document.getElementById("total_expense")
let remaining = document.getElementById("remaining")
let totalExpense = 0;
let TotalIncome = 0
let remaining_money = 0
        function addExpenses() {
            // creating elements
            let div = document.createElement("div")
            let reason = document.createElement("input")
            let expense = document.createElement("input")
            let trash = document.createElement("button")
// naming and giving an identity for the elements which are created now
            trash.innerHTML = "delete"
trash.className = "btn btn-danger"
            reason.placeholder = "reason for the expense"
            reason.id = "reason"
            reason.type = "text"
            expense.placeholder = "how much does it cost?"
            expense.id = "expense_1"
            expense.type = "number"
            
            // assigning them on to the divider that is created with them
            div.appendChild(reason)
            div.appendChild(expense)
            div.appendChild(trash)

            // appending the newly created divider to the expenses page
            expenses.append(div)

// delete the new created divider and its contents
            trash.onclick = function () 
            {
                div.remove()
                // call out for calculator to continue the calculation even when the divider is removed
                calculate()
            }

        }



function calculate() {

TotalIncome = Income.value
// selecting all input from the expenses category
    let allExpenses = expenses.querySelectorAll("input[type='Number']")
    allExpenses.forEach(element => {
        // as the data comes out as a string it has to be changed to a Number
        totalExpense += Number(element.value) || 0;
    });

    // calculates the remaining money left
    remaining_money = TotalIncome - totalExpense

    // printing them on the browser
    // using a thousand separator
Total_income.innerHTML= `Total Income: ${TotalIncome.toLocaleString()}`
total_expense.innerHTML= `Total Expense: ${totalExpense.toLocaleString()}`
remaining.innerHTML= `Remaining Budget: ${remaining_money.toLocaleString()}`

// it erases the value when recalled
totalExpense = 0
TotalIncome = 0
remaining_money = 0

}

// calls out the calculator function each time when data entry happen
Income.addEventListener("input",calculate)
expenses.addEventListener("input",calculate)
    

