import xlsx from "xlsx";
import fs from "fs";

export default function ExcellToJson() {
  const workbook = xlsx.readFile("src/sample/patient_ecg_coordinates.xlsx");
  const sheetName = workbook.SheetNames[0];
  const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

  // Write the data to a JSON file
  fs.writeFile("src/sample/ecg_data.json", JSON.stringify(sheetData), (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });
}
