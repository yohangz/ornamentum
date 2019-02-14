  /**
   * Get socket stream reference.
   */
  public get socketStream(): WebSocketSubject<DataTableQueryResult<T[]>> {
    return this.socket;
  }
