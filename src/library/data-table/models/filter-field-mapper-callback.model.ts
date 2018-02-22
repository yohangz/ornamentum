/**
 * Filter field mapper callback.
 * @param {any} value - Data item
 * @param {number} index - Item index.
 * @param {any[]} array - Data items.
 * @return {any|any[]} Mapped filter value.
 */
import { FilterOption } from './filter-option.model';

export type FilterFieldMapperCallback = (value: any, index: number) => FilterOption;
