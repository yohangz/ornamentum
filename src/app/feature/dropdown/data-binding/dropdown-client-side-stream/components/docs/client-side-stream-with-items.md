let offset = 0;

if (this.globalRefService.isBrowser) {
  
  // This code is used to set the items collection every 2 seconds.
  // Replace this with your own data extraction logic.
  timer(0, 2000).pipe(
    tap(() => {
      offset += 20;
      if (offset >= 100) {
        offset = 0;
      }

      // This line of code is fetching 20 dummy data items collection from a local data service.
      // Replace this with your own data source.
      this.items = this.dataFetchService.fetchStaticData(offset, 20);
    })
  ).subscribe();
}
