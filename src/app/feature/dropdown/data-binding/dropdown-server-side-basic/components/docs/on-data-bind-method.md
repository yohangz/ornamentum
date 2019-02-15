  public onDataBind(
    resourcePath: string,
    mapper?: <Q>(response: Observable<Q>) => Observable<DropdownQueryResult<T[]>>,
    requestOptions?: any
  ): DropdownDataBindCallback {
    return (params?: DropdownRequestParams): Observable<DropdownQueryResult<T[]>> => {
      let queryParams = new HttpParams();

      if (params) {
        if (params.limit !== undefined) {
          queryParams = queryParams.set('limit', String(params.limit));
        }

        if (params.offset !== undefined) {
          queryParams = queryParams.set('offset', String(params.offset));
        }

        if (params.filter && params.filter.value) {
          queryParams = queryParams.set('filter', `${params.filter.key}|${params.filter.value}`);
        }

        const resource = this.http.get<any>(resourcePath, { params: queryParams, ...requestOptions }) as Observable<any>;

        if (mapper) {
          return mapper(resource);
        }

        return resource;
      }
    };
  }
