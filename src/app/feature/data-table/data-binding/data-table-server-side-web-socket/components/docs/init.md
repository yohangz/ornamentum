  /**
   * Initialize web socket connection.
   * @param config Socket configuration parameters.
   */
  public init(config?: WebSocketSubjectConfig<DataTableQueryResult<T[]>>): void {
    this.socket = webSocket<any>(config);
    this.subject = new Subject<DataTableQueryResult<T[]>>();
  }
