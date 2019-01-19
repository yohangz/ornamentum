  
  /**
   * Fetch data from server to demo server side data binding.
   * @param offset
   * @param limit
   */
  public fetchDataFromServer(offset: number = 0, limit: number = 10): Observable<ResourceData<ExampleData[]>> {
    let params = new HttpParams();
    params = params.set('offset', String(offset)).set('limit', String(offset + limit));
    return this.http.get<ResourceData<ExampleData[]>>('/api/data', { params: params });
  }
  
