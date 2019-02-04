import forOwn from 'lodash/forOwn';
import get from 'lodash/get';
import orderBy from 'lodash/orderBy';

import { DataTableQueryField } from 'ornamentum';

export const queryDataByFieldExpression = (data: any[], offset: number, limit: number, fields: any = {}): any => {
  const filters = [];
  const sort = {
    fields: [],
    orders: []
  };

  forOwn(fields, (value: string, key: string): void => {
    if (value === '') {
      return;
    }

    const fieldPair = value.split('|');

    const filterValue = fieldPair[0];
    if (filterValue !== '') {
      filters.push({
        field: key,
        values: String(filterValue).split(',')
      });
    }

    const sortOrder = fieldPair[1];
    if (sortOrder) {
      sort.fields.push(key);
      sort.orders.push(sortOrder);
    }
  });

  let result = data;
  if (filters.length) {
    result = data.filter((item) => {
      return filters.every((filter) => {
        const value = get(item, filter.field);

        return filter.values.some((filterItem) => {
          const filterValue = String(filterItem).toLowerCase();
          const fieldValue = String(value).toLowerCase();
          return fieldValue.includes(filterValue);
        });
      });
    });
  }

  if (sort.orders.length) {
    result = orderBy(result, sort.fields, sort.orders);
  }

  const items = result.slice(offset, offset + limit);
  const count = result.length;

  return {
    items,
    count
  };
};

export const queryDataByFieldCollection = (data: any[], offset: number, limit: number, fields: DataTableQueryField[]): any => {
  let result = data;

  console.log(limit, ' ', offset, ' ', fields);
  const filterFields = fields.filter(field => field.filterable);
  if (filterFields.length) {
    result = data.filter(item => {
      return filterFields.every((filterColumn: DataTableQueryField) => {
        const fieldValue = get(item, filterColumn.field);
        if (fieldValue === undefined) {
          return true;
        }

        if (Array.isArray(filterColumn.filterValue)) {
          return (
            filterColumn.filterValue.length === 0 ||
            filterColumn.filterValue.includes(fieldValue)
          );
        }

        const value = String(fieldValue).toLowerCase();
        const filterValue = String(filterColumn.filterValue).toLowerCase();
        return value.includes(filterValue);
      });
    });
  }

  const sortColumns = fields.filter((column: DataTableQueryField) => {
    return column.sortable && column.sortOrder !== '';
  });

  if (sortColumns.length) {
    const orderData = sortColumns.reduce(
      (accumulator: any, column: DataTableQueryField) => {
        if (accumulator) {
          accumulator.fields.push(column.field);
          accumulator.orders.push(column.sortOrder);
        }

        return accumulator;
      },
      {
        fields: [],
        orders: []
      }
    );

    result = orderBy(result, orderData.fields, orderData.orders);
  }

  const items = result.slice(offset, offset + limit);
  const count = result.length;

  return {
    items,
    count
  };
};
