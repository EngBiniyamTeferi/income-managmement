
document.getElementById("downloadBtn").addEventListener("click", () => {
  exportToExcel();
});

function exportToExcel() {
  
  // 2. Store inputs
  const inputs = { TotalIncome };

  // 3. Fake calculation (replace with real)
  const costs = {
  };

  let allExpenses = expenses.querySelectorAll("input[type='Number']")
    allExpenses.forEach(element => {
        // as the data comes out as a string it has to be changed to a Number
        costs.push(element.value) || 0;
    });

  // 4. Build JSON
  const data = [
    { Section: "Project Info", Item: "Area", Value: inputs.area },
    { Section: "Costs", Item: "Structure", Value: costs.element },
  ];

  // 5. Convert to sheet
  const worksheet = XLSX.utils.json_to_sheet(data);

  // 6. Create workbook
  const workbook = XLSX.utils.book_new();

  // 7. Add sheet
  XLSX.utils.book_append_sheet(workbook, worksheet, "Estimate");

  // 8. Download file
  XLSX.writeFile(workbook, "estimate.xlsx");
}