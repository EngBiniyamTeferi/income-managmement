
document.getElementById("downloadBtn").addEventListener("click", () => {
  exportToExcel();
});

function exportToExcel() {
    const expensesList = []
  const reasonsList = []
  // 2. Store inputs
  const inputs = { Income };
// const inputs = [TotalIncome, totalExpense, remaining_money]
  // 3. Fake calculation (replace with real)


  let allExpenses = expenses.querySelectorAll("input[type='number']")
  let allReasons = expenses.querySelectorAll("input[type='text']")
    allExpenses.forEach(element => {
        // as the data comes out as a string it has to be changed to a Number
        expensesList.push(Number(element.value) || 0);
    });

    allReasons.forEach(element => {
reasonsList.push(Number(element.value) || "");
    })

    let excelIncome ={ "Total Income": inputs.Income.value }
const data = [
  ];

  data.push({
    "Reason": "Total Income",
    "Expense": Income.value
  });
    for (let i = 0; i < reasonsList.length; i++){
        let reason = document.createElement("h4")
        let expense = document.createElement("h4")
        reason = reasonsList[i]
        expense = expensesList[i]
        data.push({ 

 "Reason": reason,
    "Expense": expense
        })
    }

    data.push({
        "remaining": remaining
    })

  // 4. Build JSON
  

  // 5. Convert to sheet
  const worksheet = XLSX.utils.json_to_sheet(data);

  // 6. Create workbook
  const workbook = XLSX.utils.book_new();

  // 7. Add sheet
  XLSX.utils.book_append_sheet(workbook, worksheet, "Income Manager");

  // 8. Download file
  XLSX.writeFile(workbook, "Income Manager.xlsx");
}