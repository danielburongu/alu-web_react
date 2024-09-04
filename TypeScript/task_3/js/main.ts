/// <reference path="./crud.d.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create an object called row with the type RowElement
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// Insert the row and save the returned RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row object with an age field set to 23
const updatedRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
};

// Update the row with the new age
CRUD.updateRow(newRowID, updatedRow);

// Delete the row by its ID
CRUD.deleteRow(newRowID);
