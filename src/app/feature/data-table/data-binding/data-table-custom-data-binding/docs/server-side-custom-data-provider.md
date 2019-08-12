export interface CustomDataTableQueryResult<T> {
  /**
   * Items collection
   * @template Generic item type
   */
  items: T[];

  /**
   * Item count
   */
  count: number;
}
  


public onDataBind: () => Observable<CustomDataTableQueryResult<ExampleData>>;

constructor(public http: HttpClient) {
  /**
   * custom data provider need to return a function which is return an Observable out put
   * as long as your data return as observable you can use any data source
   * example : Firebase Realtime Database or Cloud Firestore
   */
  this.onDataBind = (): Observable<CustomDataTableQueryResult<ExampleData>> => {
                        return this.http.get('https://api.github.com/users/cagline/repos', {})
                          .pipe(
                            map((res: any) => {
                    
                              /**
                               * Items collection
                               * items: T[];
                               * Item count
                               * count: number;
                               */
                              return {
                                items: res,
                                count: res.length
                              };
                            })
                          ) as Observable<any>;
                    
                      };
}
