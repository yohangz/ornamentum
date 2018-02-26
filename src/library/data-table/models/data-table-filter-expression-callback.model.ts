/**
 * Filter expression callback.
 * @param {any} item - Data item.
 * @param {string} field - Filter field property name.
 * @param {any} filterValue - Filter value
 * @return {boolean} Include item if true, else remove.
 */
export type DataTableFilterExpressionCallback = (item: any, field: string, filterValue: any) => boolean;
