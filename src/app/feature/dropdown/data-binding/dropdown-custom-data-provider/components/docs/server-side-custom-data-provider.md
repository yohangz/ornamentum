  public onDataBind: () => Observable<DropdownQueryResult<ExampleData>>;

  constructor(public http: HttpClient) {
    /**
     * custom data provider need to return a function which is return an Observable out put
     * as long as your data return as observable you can use any data source
     * example : Firebase Realtime Database or Cloud Firestore
     */
    this.onDataBind = (): Observable<DropdownQueryResult<ExampleData>> => {
      return this.http.get('https://api.github.com/users/cagline/repos', {})
        .pipe(
          map((res: any) => {

            /**
             * Options collection
             * options: T[];
             * Option count
             * count: number;
             */
            return {
              options: res,
              count: res.length
            };
          })
        ) as Observable<any>;

    };
  }
