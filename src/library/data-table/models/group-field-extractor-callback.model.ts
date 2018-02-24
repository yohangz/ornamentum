import { DataRow } from './data-row.model';

/**
 * Dynamic row span extractor callback.
 * @param {DataRow} row - Target data row.
 * @return {number} - Row span for current row.
 */
export type DynamicRowSpanExtractorCallback = (row: DataRow) => number;
