  public get isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
