  public init(config?: WebSocketSubjectConfig<DataTableQueryResult<T[]>>): void {
    this.socket = webSocket<any>(config);
    this.subject = new Subject<DataTableQueryResult<T[]>>();
  }
