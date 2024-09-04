// Import types from interface.ts
import { RowID, RowElement } from '../interface';

// Declare module for the crud.js file
declare module './crud' {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
}
