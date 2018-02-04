/**
 * Filter field mapper callback.
 * @param {any} value - Data item
 * @param {number} index - Item index.
 * @param {any[]} array - Data items.
 * @return {any|any[]} Mapped filter value.
 */
export type FilterFieldMapperCallback = (value: any, index: number, array: any[]) => any | any[];
