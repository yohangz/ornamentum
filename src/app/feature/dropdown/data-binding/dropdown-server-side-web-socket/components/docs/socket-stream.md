  public get socketStream(): WebSocketSubject<DropdownQueryResult<T[]>> {
    return this.socket;
  }
