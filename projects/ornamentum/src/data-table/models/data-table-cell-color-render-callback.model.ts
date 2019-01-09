import { DataTableRow } from './data-table-row.model';

import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Cell color render callback
 * @param row Target data row
 * @param column Target Data table column component reference
 * @return Colour hex string
 */
export type DataTableCellColorRenderCallback<T> = (row: DataTableRow<T>, column: DataTableColumnComponent) => string;
