import {getSheetByName, getColumnValues} from "./utils/sheetUtils";

export function main() {
    const spreadsheetId = "1w7d08cVIbEGMae9cy_t_ddFtY7_dTQDg3R2nTfha1Ok"
    const sheetName = "main"
    const sheet = getSheetByName(spreadsheetId,sheetName)

    const column = 2
    const name_list:string[] = getColumnValues(sheet, column)

    console.log(name_list)
}