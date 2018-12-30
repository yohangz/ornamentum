/**
 * Fetch data from server to demo server side data binding.
 * @param offset
 * @param limit
 */
public fetchDataFromServer(offset: number = 0, limit: number = 10): Observable<any> {
  let params = new HttpParams();
  params = params.set('offset', String(offset)).set('limit', String(offset + limit));
  return this.http.get<any>('/api/data', {params: params});
}
