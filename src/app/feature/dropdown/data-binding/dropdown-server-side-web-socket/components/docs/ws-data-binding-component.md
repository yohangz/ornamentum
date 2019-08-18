@Component({
  ...
})
export class ServerSideWebSocketBasicUsageComponent {
  public onDataBind: DropdownDataBindCallback<ExampleData>;
  
  private webSocketProvider: DropdownWebsocketDataFetchService<ExampleData>;
  
  constructor(private resourceFactory: DropdownWebsocketResourceFactoryService) {
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
