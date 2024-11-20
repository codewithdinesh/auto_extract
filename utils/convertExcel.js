// import XLSX from "xlsx";
import * as XLSX from 'xlsx'

export function convertExcelToCsv(fileBuffer, sheetName) {
    try {

        const workbook = XLSX.read(fileBuffer, { type: "buffer" });


        // first sheet
        const worksheet = sheetName
            ? workbook.Sheets[sheetName]
            : workbook.Sheets[workbook.SheetNames[0]];


        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            defval: null,
        });

        // preprocess the data
        jsonData = jsonData.filter(row => {
            return Object.values(row).some(value => value !== null && value !== "");
        });

        // console.log("Converted to json:", jsonData);

        // json to csv
        const cleanedSheet = XLSX.utils.json_to_sheet(jsonData);
        const csvData = XLSX.utils.sheet_to_csv(cleanedSheet);

        // console.log("Converted CSV Data");
        // console.log(csvData);

        // Return the CSV data as a string
        return csvData;
    } catch (error) {
        console.error("Error converting file:", error);
        throw error;
    }
}