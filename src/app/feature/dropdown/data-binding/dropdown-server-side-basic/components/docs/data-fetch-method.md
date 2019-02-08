 
  /**
   * Fetch data stream from server for server side data binding for Dropdown.
   * @param params DataTableRequestParams
   */
  public fetchDataOnBindForDropdown(params?: DropdownRequestParams): Observable<ResourceData<ExampleData[]>> {
    let queryParams = new HttpParams();
    if (params) {
      if (params.filter !== undefined && params.filter.value !== '') {
        queryParams = queryParams.append('keyword', params.filter.value.toString());
      }

      if (params.limit !== undefined) {
        queryParams = queryParams.append('limit', params.limit.toString());
      }

      if (params.offset !== undefined) {
        queryParams = queryParams.append('offset', params.offset.toString());
      }
    }

    return this.http.get<ResourceData<ExampleData[]>>('/api/data', {params: queryParams});
  }
