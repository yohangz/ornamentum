import { DataRow } from './data-row.model';

/**
 * Group field extractor callback.
 * @param {DataRow} row - Target data row.
 * @return {any[][]} - Collection of groups
 */
export type GroupFieldExtractorCallback = (row: DataRow) => any[][];
