let offset = 0;

if (this.globalRefService.isBrowser) {

  this.subscription = timer(0, 2000).pipe(
    tap(() => {
      offset += 20;
      if (offset >= 100) {
        offset = 0;
      }

      this.items = this.dataFetchService.fetchStaticData(offset, 20);
    })
  ).subscribe();
}
