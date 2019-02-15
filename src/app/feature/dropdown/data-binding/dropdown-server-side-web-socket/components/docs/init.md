  public init(config?: WebSocketSubjectConfig<DropdownQueryResult<T[]>>): void {
    this.socket = webSocket<any>(config);
    this.subject = new Subject<DropdownQueryResult<T[]>>();
  }
