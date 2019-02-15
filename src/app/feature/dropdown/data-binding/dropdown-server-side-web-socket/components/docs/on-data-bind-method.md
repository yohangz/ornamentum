  public onDataBind(mapper?: <Q>(response: Observable<Q>) => Observable<DropdownQueryResult<T[]>>): DropdownDataBindCallback {
    if (!this.socket) {
      throw Error('Initialize socket data source before data bind.');
    }

    this.socketSubscription = this.socket.subscribe(this.subject);

    return (params?: DropdownRequestParams): Observable<DropdownQueryResult<T[]>> => {
      if (params) {
        this.socket.next({
          type: 'data-fetch',
          filter: params.filter,
          offset: params.offset,
          limit: params.limit
        } as any);

        if (mapper) {
          return mapper(this.subject);
        }

        return this.subject;
      }
    };
  }
