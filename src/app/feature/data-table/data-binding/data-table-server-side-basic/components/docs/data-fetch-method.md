const onDataBind = (params?: DataTableRequestParams): Observable<DataTableQueryResult<any[]>> => {
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

    return this.http.get('/api/resource/path', { params: queryParams });
  }
};
