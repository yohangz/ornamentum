/**
 * Filter expression callback
 * @param item Data item
 * @param field Filter field property name
 * @param filterValue Filter value
 * @return Include item if true, else remove
 */
export type DataTableFilterExpressionCallback = (item: any, field: string, filterValue: any) => boolean;
