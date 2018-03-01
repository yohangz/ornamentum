import { DataTableRow } from './data-table-row.model';

/**
 * Dynamic row span extractor callback.
 * @param {DataTableRow} row - Target data row.
 * @return {number} - Row span for current row.
 */
export type DataTableDynamicRowSpanExtractorCallback<T> = (row: DataTableRow<T>) => number;
