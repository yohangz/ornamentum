  
  /**
   * Fetch data from server for server side data binding.
   * @param params DataTableRequestParams
   */
  public fetchDataOnBindForDataTable(params?: DataTableRequestParams): Observable<ResourceData<ExampleData[]>> {
    let queryParams = new HttpParams();

    if (params) {
      if (params.limit !== undefined) {
        queryParams = queryParams.append('limit', String(params.limit));
      }

      if (params.offset !== undefined) {
        queryParams = queryParams.append('offset', String(params.offset));
      }

      params.filterColumns.forEach((dataTableColumnComponent: DataTableFilterColumn) => {
        if (dataTableColumnComponent.filterValue === undefined || dataTableColumnComponent.filterValue === '') {
          return;
        }

        if (typeof dataTableColumnComponent.filterValue === 'string') {
          queryParams = queryParams.append(dataTableColumnComponent.field, dataTableColumnComponent.filterValue);
          return;
        }
      });

      return this.http.get<ResourceData<ExampleData[]>>('/api/data', {params: queryParams});
    }
  }
