import { DataTableRow } from './data-table-row.model';
import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Cell colour render callback.
 * @param {DataTableRow} row - Target data row.
 * @param {DataTableColumnComponent} column - Target Data table column component reference.
 * @return {string} - Colour hex string
 */
export type DataTableCellColourRenderCallback<T> = (row: DataTableRow<T>, column: DataTableColumnComponent) => string;
