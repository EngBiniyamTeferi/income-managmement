document.getElementById("downloadBtn").addEventListener("click", () => {
  exportToExcel();
});

function exportToExcel() {
    const expensesList = []
  const reasonsList = []
  const inputs = { Income };


  let allExpenses = expenses.querySelectorAll("input[type='number']")
  let allReasons = expenses.querySelectorAll("input[type='text']")
    allExpenses.forEach(element => {
        expensesList.push(Number(element.value) || 0);
    });

    allReasons.forEach(element => {
reasonsList.push(element.value || "");
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

 "Reason": String(reason),
    "Expense": expense
        })
    }

    data.push({
        "remaining": remaining.value
    })


  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Income Manager");

  XLSX.writeFile(workbook, "Income Manager.xlsx");
}