  public get socketStream(): WebSocketSubject<DataTableQueryResult<T[]>> {
    return this.socket;
  }
