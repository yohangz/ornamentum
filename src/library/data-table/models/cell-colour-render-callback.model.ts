import { DataRow } from './data-row.model';
import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Cell colour render callback.
 * @param {DataRow} row - Target data row.
 * @param {DataTableColumnComponent} column - Target Data table column component reference.
 * @return {string} - Colour hex string
 */
export type CellColourRenderCallback = (row: DataRow, column: DataTableColumnComponent) => string;
