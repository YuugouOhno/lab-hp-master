export function getColumnValues(sheet: GoogleAppsScript.Spreadsheet.Sheet, column: number): string[] {
    const lastRow = sheet.getLastRow();
    if (lastRow === 0) return []; // データがない場合
  
    const range = sheet.getRange(1, column, lastRow);
    return range.getValues().flat().filter(value => value !== "");
  }
  
  export function getSheetByName(spreadsheetId: string, sheetName: string): GoogleAppsScript.Spreadsheet.Sheet {
    const ss = SpreadsheetApp.openById(spreadsheetId);
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      throw new Error(`シート '${sheetName}' が見つかりません`);
    }
    return sheet;
  }
  