/**
 * Filter field mapper callback.
 * @param {any} value - Data item
 * @param {number} index - Item index.
 * @param {any[]} array - Data items.
 * @return {any|any[]} Mapped filter value.
 */
import { DataTableFilterOption } from './data-table-filter-option.model';

export type DataTableFilterFieldMapperCallback = (value: any, index: number) => DataTableFilterOption;
