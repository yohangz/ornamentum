import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Filter value extract callback.
 * @param {DataTableColumnComponent} filterColumn - Filter column.
 * @return {Promise<any[]>} - Filter value promise.
 */
export type FilterValueExtractCallback = (filterColumn: DataTableColumnComponent) => Promise<any[]>;
