    let offset = 0;

    if (this.globalRefService.isBrowser) {

      this.items = timer(0, 2000).pipe(
        map(() => {
          offset += 20;
          if (offset >= 100) {
            offset = 0;
          }

          return this.dataFetchService.fetchStaticData(offset, 20);
        })
      );
    }
