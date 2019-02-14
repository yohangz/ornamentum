  /**
   * Is browser environment
   * @return True if current environment is browser
   */
  public get isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
