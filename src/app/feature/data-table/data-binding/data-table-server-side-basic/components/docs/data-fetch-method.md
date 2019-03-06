public onDataBind(
  resourcePath: string,
  mapper?: <Q>(response: Observable<Q>) => Observable<DataTableQueryResult<T[]>>,
  requestOptions?: any
): DataTableDataBindCallback {
  return (params?: DataTableRequestParams): Observable<DataTableQueryResult<T[]>> => {
    let queryParams = new HttpParams();

    if (params) {
      if (params.limit !== undefined) {
        queryParams = queryParams.set('limit', String(params.limit));
      }

      if (params.offset !== undefined) {
        queryParams = queryParams.set('offset', String(params.offset));
      }

      params.fields.forEach((column: DataTableQueryField, index: number) => {
        let query = '';

        if (column.filterable) {
          if (typeof column.filterValue === 'string') {
            if (column.filterValue !== '') {
              query += column.filterValue;
            }
          } else if (Array.isArray(column.filterValue) && column.filterValue.length) {
            query += column.filterValue.join(',');
          }
        }

        if (column.sortable && column.sortOrder !== '') {
          query += `|${column.sortOrder}|${index}`;
        }

        if (query) {
          queryParams = queryParams.set(column.field, query);
        }
      });

      const resource = this.http.get<any>(resourcePath, { params: queryParams, ...requestOptions }) as Observable<any>;

      if (mapper) {
        return mapper(resource);
      }

      return resource;
    }
  };
}
