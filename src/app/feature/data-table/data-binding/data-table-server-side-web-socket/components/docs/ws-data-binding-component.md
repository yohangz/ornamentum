@Component({
  ...
})
export class ServerSideWebSocketBasicUsageComponent {
  public onDataBind: DataTableDataBindCallback;
  
  constructor(private globalRefService: GlobalRefService,
              private dataTableWebSocketDataFetchService: DataTableWebsocketDataFetchService<ExampleData>) {
  }

  /**
   * Component initialize lifecycle event handler.
   */
  public ngOnInit(): void {
    // Create web socket connection to support server side rendering.
    this.dataTableWebSocketDataFetchService.init({
      url: `wss://ornamentum.app` // web socket endpoint
    });

    this.onDataBind = this.dataTableWebSocketDataFetchService.onDataBind();
  }

  /**
   * Component destroy lifecycle event handler.
   */
  public ngOnDestroy(): void {
    this.dataTableWebSocketDataFetchService.dispose();
  }
}
