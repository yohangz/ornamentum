  // This is an internal service used to check the execution environment.
  // Checks whether it is browser or not.
  if (this.globalRefService.isBrowser) {
  
    // Code segment used to emulate the realtime data binding.
    timer(0, 2000).pipe(
      map(() => {
        offset += 20;
        if (offset >= 100) {
          offset = 0;
        }
        return offset;
      })
    ).subscribe(data => {
      // Bind data in the client-side.
      this.items = this.dataFetchService.fetchStaticData(data, 20);
    });
  
  } else {
    // Bind data in the server-side.
    this.items = this.dataFetchService.fetchStaticData(offset, 20);
  }
