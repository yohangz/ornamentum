@Component({
  ...
})
export class ServerSideWebSocketBasicUsageComponent {
  public onDataBind: DataTableDataBindCallback<ExampleData>;
  
  private webSocketProvider: DataTableWebsocketDataFetchService<ExampleData>;
  
  constructor(private resourceFactory: DataTableWebsocketResourceFactoryService) {
    this.webSocketProvider = resourceFactory.getResourceProvider<ExampleData>();
  }

  /**
   * Component initialize lifecycle event handler.
   */
  public ngOnInit(): void {
    // Create web socket connection to support server side rendering.
    this.webSocketProvider.init({
      url: `wss://ornamentum.app` // web socket endpoint
    });

    this.onDataBind = this.webSocketProvider.onDataBind();
  }

  /**
   * Component destroy lifecycle event handler.
   */
  public ngOnDestroy(): void {
    this.webSocketProvider.dispose();
  }
}
