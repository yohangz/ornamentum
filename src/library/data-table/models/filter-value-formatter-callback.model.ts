import { FilterOption } from './filter-option.model';

/**
 * Filter value formatter callback.
 * @param {any} value - Data item.
 * @param {number} index - Item index.
 * @return {FilterOption} - Formatted filter option.
 */
export type FilterValueFormatterCallback = (value: any, index: number) => FilterOption;
